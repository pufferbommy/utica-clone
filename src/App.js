import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// components
import Navbar from './components/Navbar';

// pages
import Home from './pages/Home';
import Project from './pages/Project';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work-1/:project" element={<Project />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
