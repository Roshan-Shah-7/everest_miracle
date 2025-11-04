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
import GoToTop from './components/GoToTop';

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
      </Routes>
      <Footer />
      <GoToTop />
    </Router>
  )
}

export default App
