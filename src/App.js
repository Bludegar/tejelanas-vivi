import React, { useState } from 'react';
import ProductCard from './components/ProductCard';
import ContactForm from './components/ContactForm';
import ImageCarousel from './components/ImageCarousel';

function App() {
  const [selectedProduct, setSelectedProduct] = useState('');

  const handleContact = (productName) => {
    setSelectedProduct(productName);
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  
  <ImageCarousel
  images={[
    { src: '/images/lana1.jpg', alt: 'Lana natural 1' },
    { src: '/images/lana2.jpg', alt: 'Lana natural 2' },
    { src: '/images/vellon1.jpg', alt: 'Vellón 1' },
  ]}
/>

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Tejelanas Vivi</h1>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <ProductCard
          image="/images/lana-natural.jpg"
          title="Lana Natural"
          description="Lana 100% natural ideal para crochet y tejido a palillo."
          onContact={handleContact}
        />
        <ProductCard
          image="/images/vellon.jpg"
          title="Vellón para Fieltro"
          description="Vellón teñido para técnicas de fieltro seco y húmedo."
          onContact={handleContact}
        />
      </div>


      <ContactForm selectedProduct={selectedProduct} />
    </div>
  );
}

export default App;
