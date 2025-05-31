import React, { useState } from 'react';
import ProductCard from './components/ProductCard';
import ContactForm from './components/ContactForm';
import ImageCarousel from './components/ImageCarousel';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import Products from './components/Products';

function App() {
  const [selectedProduct, setSelectedProduct] = useState('');

  const handleContact = (productName) => {
    setSelectedProduct(productName);
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
  <div>
    <Navbar />
  <AboutUs />
  <Products />


    <section id="productos">
        <ImageCarousel
          images={[
            { src: '/images/lana1.jpg', alt: 'Lana natural 1' },
            { src: '/images/lana2.jpg', alt: 'Lana natural 2' },
            { src: '/images/vellon1.jpg', alt: 'Vellón 1' },
          ]}
        />
      </section>

      <section style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
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
      </section>

      <section id="faq">
        <h2 style={{ textAlign: 'center' }}>Preguntas Frecuentes</h2>
        <ul style={{ maxWidth: '700px', margin: 'auto' }}>
          <li><strong>¿Hacen envíos?</strong> Sí, a todo Chile por Starken y Chilexpress.</li>
          <li><strong>¿Dónde están ubicadas?</strong> En Laguna de Zapallar.</li>
          <li><strong>¿Cómo puedo inscribirme a un taller?</strong> Escríbenos en el formulario de contacto.</li>
        </ul>
      </section>

      <section id="contacto">
        <ContactForm selectedProduct={selectedProduct} />
      </section>

    </div>
  );
}

export default App;
