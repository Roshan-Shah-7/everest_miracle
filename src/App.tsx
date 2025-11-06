import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header"
import HomePage from "./pages/Home"
import Footer from './components/Footer';
import About from './pages/About';
import ToursPage from './pages/Tours';
import ContactPage from './pages/Contact';
import TourDetailPage from './pages/TourDetail';
import TicketingPage from './pages/Ticketing';
import WhyNepalPage from './pages/WhyNepal';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import DeepakKumar from './pages/DeepakKumar';
import BharatJung from './pages/BharatJung';
import TrustedHotels from './pages/TrustedHotels';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/tours" element={<ToursPage />} />
        <Route path="/tour/:id" element={<TourDetailPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/ticketing" element={<TicketingPage />} />
        <Route path="/why-nepal" element={<WhyNepalPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/team/deepak-kumar" element={<DeepakKumar />} />
        <Route path="/team/bharat-jung" element={<BharatJung />} />
        <Route path="/trusted-hotels" element={<TrustedHotels />} />
      </Routes>
      <ScrollToTop />
      <Footer />
    </Router>
  )
}

export default App
