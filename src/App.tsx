import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Index from "./pages/Index";
import WhoWeAre from "./pages/WhoWeAre";
import Solutions from "./pages/Solutions";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import AgenticAI from "./pages/solutions/AgenticAI";
import Education from "./pages/solutions/Education";
import Consulting from "./pages/solutions/Consulting";
import ThreatModeling from "./pages/solutions/ThreatModeling";
import WebSecurity from "./pages/solutions/WebSecurity";
import Leadership from "./pages/solutions/Leadership";
import CareerCoaching from "./pages/solutions/CareerCoaching";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/who-we-are" element={<WhoWeAre />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/solutions/agentic-ai" element={<AgenticAI />} />
            <Route path="/solutions/education" element={<Education />} />
            <Route path="/solutions/consulting" element={<Consulting />} />
            <Route path="/solutions/threat-modeling" element={<ThreatModeling />} />
            <Route path="/solutions/web-security" element={<WebSecurity />} />
            <Route path="/solutions/leadership" element={<Leadership />} />
            <Route path="/solutions/career-coaching" element={<CareerCoaching />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
