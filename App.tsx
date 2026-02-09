import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Capabilities from './pages/Capabilities';
import Expertise from './pages/Expertise';
import ExpertiseDetails from './pages/ExpertiseDetails';
import Reports from './pages/Reports';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20"> {/* pt-20 to account for fixed header */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/capabilities" element={<Capabilities />} />
            <Route path="/expertise" element={<Expertise />} />
            <Route path="/expertise/:id" element={<ExpertiseDetails />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;