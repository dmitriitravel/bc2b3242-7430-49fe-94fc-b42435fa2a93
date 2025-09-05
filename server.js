import fs from 'node:fs';
import path from 'node:path';
import express from 'express';
import compression from 'compression';

const isProd = process.env.NODE_ENV === 'production';
const resolve = (p) => path.resolve(path.dirname(new URL(import.meta.url).pathname), p);

async function createServer(root = process.cwd(), hmrPort = 24678) {
  const app = express();

  app.use(compression());
  app.use('/assets', express.static(resolve('dist/client/assets'), { maxAge: '1y', immutable: true }));

  let vite = null;
  let template = '';
  let render = null;

  if (!isProd) {
    const viteCreateServer = (await import('vite')).createServer;
    vite = await viteCreateServer({
      root,
      server: { middlewareMode: true, hmr: { port: hmrPort } }
    });
    app.use(vite.middlewares);
    template = fs.readFileSync(resolve('index.html'), 'utf-8');
  } else {
    template = fs.readFileSync(resolve('dist/client/index.html'), 'utf-8');
    render = (await import('./dist/server/entry-server.js')).render;
    app.use(express.static(resolve('dist/client'), { index: false }));
  }

  app.get(/.*/, async (req, res, next) => {
    try {
      const url = req.originalUrl;

      let tpl = template;
      if (!isProd && vite) {
        tpl = await vite.transformIndexHtml(url, template);
        render = (await vite.ssrLoadModule('/src/entry-server.tsx')).render;
      }

      const { html: appHtml, head } = await render(url);

      // Extract <h1> for title and optional in-body description marker for blog pages
      let dynamicHead = head || '';
      let bodyAppHtml = appHtml;
      if (url.startsWith('/blog')) {
        const h1Match = appHtml.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
        if (h1Match) {
          const h1Inner = h1Match[1]
            .replace(/<[^>]*>/g, '')
            .replace(/\s+/g, ' ')
            .trim();
          if (h1Inner) {
            dynamicHead = `${dynamicHead}<title>${h1Inner}</title>`;
          }
        }
        const descMatch = appHtml.match(/<meta[^>]*data-ssr-description[^>]*content=["']([\s\S]*?)["'][^>]*>/i);
        if (descMatch) {
          const descContent = descMatch[1].trim();
          if (descContent) {
            dynamicHead = `${dynamicHead}<meta name="description" content="${descContent.replace(/"/g, '&quot;')}" />`;
          }
          // remove marker from body
          bodyAppHtml = appHtml.replace(/<meta[^>]*data-ssr-description[^>]*>\s*/i, '');
        }
      }

      // Inject SSR HTML. Fallback if template lacks <!--ssr-outlet-->.
      let html = tpl.replace('<!--ssr-outlet-->', bodyAppHtml);
      if (html === tpl) {
        html = tpl.replace('<div id="root"></div>', `<div id="root">${bodyAppHtml}</div>`);
      }
      html = html.replace('</head>', `${dynamicHead}</head>`);

      res.status(200).set({ 'Content-Type': 'text/html', 'Cache-Control': 'no-store' }).end(html);
    } catch (e) {
      if (!isProd && vite) vite.ssrFixStacktrace(e);
      next(e);
    }
  });

  const port = process.env.PORT || 8080;
  return new Promise((resolveServer) => {
    const serverInstance = app.listen(port, () => {
      resolveServer({ app, serverInstance, port });
    });
  });
}

createServer();

