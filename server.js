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

      const html = tpl
        .replace('<!--ssr-outlet-->', appHtml)
        .replace('</head>', `${head || ''}</head>`);

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

