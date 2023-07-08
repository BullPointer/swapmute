import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/footer";
import Home from "./pages/Home";
import FaQ from "./components/faq";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/swapmute" element={<Home />} />
        <Route path="/faq" element={<FaQ />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
