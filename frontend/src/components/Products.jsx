import { useEffect, useState } from 'react';
import './Products.css';

function Products() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  const fallbackData = [
    {
      name: 'Lana Merino Natural',
      description: 'Lana suave y cálida ideal para proyectos de invierno.',
    },
    {
      name: 'Vellón Vegetal',
      description: 'Material sostenible para tejidos decorativos.',
    },
  ];

  useEffect(() => {
    console.log('Consultando API de productos...');
    fetch('https://www.clinicatecnologica.cl/ipss/tejelanasVivi/api/v1/products-services/', {
      headers: {
        Authorization: 'Bearer ipss.get',
      },
    })
      .then(response => {
        console.log('Respuesta:', response);
        if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
        return response.json();
      })
      .then(data => {
        console.log('Datos:', data);
        setProducts(data);
      })
      .catch(err => {
        console.warn('Falla en API. Usando datos locales.', err.message);
        setError('Mostrando productos simulados');
        setProducts(fallbackData);
      });
  }, []);

  return (
    <section className="products">
      <h2>Productos y Servicios</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className="product-list">
        {products.map((item, index) => (
          <div key={index} className="product-card">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
