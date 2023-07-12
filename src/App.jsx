import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/footer";
import Home from "./pages/Home";
import FaQ from "./components/faq";
import Blog from "./pages/Blog";
import HowItWorks from "./pages/HowItWorks";
import HelpCenter from "./pages/HelpCenter";
import Support from "./pages/Support";
import NotFound from "./pages/NoFound";
import { BlogProvider } from "./context/BlogContext";

function App() {
  return (
    <BlogProvider>
      <Navbar />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/swapmute" element={<Home />} />
        <Route path="/swapmute/faq" element={<FaQ />} />
        <Route path="/swapmute/blog" element={<Blog />} />
        <Route path="/swapmute/how-it-works" element={<HowItWorks />} />
        <Route path="/swapmute/help" element={<HelpCenter />} />
        <Route path="/swapmute/support" element={<Support />} />
      </Routes>
      <Footer />
    </BlogProvider>
  );
}

export default App;
