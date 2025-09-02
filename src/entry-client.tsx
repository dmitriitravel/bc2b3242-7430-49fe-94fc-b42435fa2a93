import { hydrateRoot, createRoot } from 'react-dom/client';
import { BrowserRouter, useLocation } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { AppRoutes } from './routes';
import './index.css';

const container = document.getElementById('root')!;
const queryClient = new QueryClient();

function TitleSync() {
  const location = useLocation();
  React.useEffect(() => {
    if (location.pathname.startsWith('/blog')) {
      const h1 = document.querySelector('h1');
      if (h1 && h1.textContent) {
        document.title = h1.textContent.trim();
      }
    }
  }, [location.pathname]);
  return null;
}

const AppShell = (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <TitleSync />
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

if (container.hasChildNodes()) {
  hydrateRoot(container, AppShell);
} else {
  createRoot(container).render(AppShell);
}

