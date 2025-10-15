import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import HomePage from './landing_page/Home/HomePage';
import Signup from './landing_page/Signup/Signup';
import About from './landing_page/About/AboutPage';
import Support from './landing_page/Support/SupportPage';
import Products from './landing_page/Products/ProductPage';
import Pricing from './landing_page/Pricing/PricingPage';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import NotFound from './landing_page/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/support" element={<Support/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/pricing" element={<Pricing/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
);
