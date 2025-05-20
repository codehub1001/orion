import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Banner from './components/Banner';
import About from './pages/About';
import Contact from './pages/Contact';
import StandardRates from './pages/StandardRates';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Testimonial from './components/Testimonials';
import WhyUs from './components/WhyUs';
import Footer from './components/Footer';
import Loader from './components/Loader';
import WhatsAppSupport from './components/WhatsappSupport';

const AppContent = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Trigger loader on page load and route change
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, [location.pathname]); // using pathname is more precise

  if (loading) {
    return <Loader />; // Show ONLY loader when loading
  }

  return (
    <>
      {loading && <Loader />}
      
      <Header />
      <Routes location={location}>
        <Route path='/' element={
          <>
            <Banner />
            <Services />
            <WhyUs />
            <Portfolio />
            <Testimonial />
          </>
        } />
        <Route path='/about' element={<About />} />
        <Route path='/rates' element={<StandardRates />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <WhatsAppSupport/>
      <Footer />
    </>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
