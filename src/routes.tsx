import { Routes, Route } from "react-router-dom";
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
import OnlineCertificate from "./pages/OnlineCertificate";
import BestOnlineSchoolsEGE from "./pages/BestOnlineSchoolsEGE";
import DistanceEducation11Grade from "./pages/DistanceEducation11Grade";
import HomeSchooling11thGradeProsCons from "./pages/HomeSchooling11thGradeProsCons";
import Top100IndividualProjectTopics from "./pages/Top100IndividualProjectTopics";
import NotFound from "./pages/NotFound";

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/blog/algoritm-vybora-shkoly" element={<BlogPost />} />
    <Route path="/blog/besplatnoe-obuchenie-11-klass" element={<FreeOnlineGrade11 />} />
    <Route path="/blog/finish-11th-grade-online" element={<ExternatOnline />} />
    <Route path="/blog/11-class-for-adults-online-school" element={<AdultOnlineSchool />} />
    <Route path="/blog/online-grade-11-moscow" element={<MoscowOnlineGrade11 />} />
    <Route path="/blog/online-school-reviews" element={<OnlineSchoolReviews />} />
    <Route path="/blog/certificate-online-11th-grade" element={<OnlineCertificate />} />
    <Route path="/blog/best-online-schools-ege-11th-grade" element={<BestOnlineSchoolsEGE />} />
    <Route path="/blog/top-100-individual-project-topics-11th-grade" element={<Top100IndividualProjectTopics />} />
    <Route path="/distance-education-11-grade" element={<DistanceEducation11Grade />} />
    <Route path="/home-schooling-11th-grade-pros-cons" element={<HomeSchooling11thGradeProsCons />} />
    <Route path="/about" element={<AboutUs />} />
    <Route path="/contacts" element={<Contacts />} />
    <Route path="/terms" element={<TermsOfService />} />
    <Route path="/privacy" element={<PrivacyPolicy />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

