import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Photos from "./pages/Photos";
import ReviewPage from "./pages/ReviewPage";
import AboutPage from "./pages/AboutPage";
import TopBanner from "./components/TopBanner";
import Footer from "./components/Footer";
import ContactPage from "./pages/ContactPage";
import BookingPage from "./pages/BookingPage";
import TourPage from "./pages/TourPage";
import BBQPage from "./pages/BBQPage";

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
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/tour" element={<TourPage />} />
          <Route path="/bbq" element={<BBQPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
