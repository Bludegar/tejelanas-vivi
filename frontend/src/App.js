import React from 'react';
import ImageCarousel from './components/ImageCarousel';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import Products from './components/Products';
import Faq from './components/Faq';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ImageCarousel />
      <AboutUs />
      <Products />
      <Faq />
      <Contact />
    </div>
  );
}

export default App;
