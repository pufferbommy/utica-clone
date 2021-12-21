import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// pages
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import OurTeam from './pages/OurTeam';
import Press from './pages/Press';
import Contact from './pages/Contact';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/press" element={<Press />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work-1/:id" element={<Project />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
