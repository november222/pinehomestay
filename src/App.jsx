import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Photos from "./pages/Photos";
import ReviewPage from "./pages/ReviewPage";
import AboutPage from "./pages/AboutPage";
import TopBanner from "./components/TopBanner";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="overflow-x-hidden">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <TopBanner />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/review" element={<ReviewPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
