import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BlogPost from "./pages/BlogPost";
import FreeOnlineGrade11 from "./pages/FreeOnlineGrade11";
import ExternatOnline from "./pages/ExternatOnline";
import AdultOnlineSchool from "./pages/AdultOnlineSchool";
import MoscowOnlineGrade11 from "./pages/MoscowOnlineGrade11";
import AboutUs from "./pages/AboutUs";
import Contacts from "./pages/Contacts";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import OnlineSchoolReviews from "./pages/OnlineSchoolReviews";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog/algoritm-vybora-shkoly" element={<BlogPost />} />
          <Route path="/blog/besplatnoe-obuchenie-11-klass" element={<FreeOnlineGrade11 />} />
          <Route path="/blog/finish-11th-grade-online" element={<ExternatOnline />} />
          <Route path="/blog/11-class-for-adults-online-school" element={<AdultOnlineSchool />} />
          <Route path="/blog/online-grade-11-moscow" element={<MoscowOnlineGrade11 />} />
          <Route path="/blog/online-school-reviews" element={<OnlineSchoolReviews />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
