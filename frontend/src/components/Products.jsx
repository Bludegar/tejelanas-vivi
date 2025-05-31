import { useEffect, useState } from 'react';
import './Products.css';

function Products() {
  const [productos, setProductos] = useState([]);
  const [servicios, setServicios] = useState([]);
  const [error, setError] = useState(null);

  const fallback = {
    productos: [
      {
        nombre: 'Producto simulado',
        descripcion: 'Descripción local por si la API no responde.',
        precio: 9990,
        imgs: [],
      },
    ],
    servicios: [
      {
        nombre: 'Taller de prueba',
        ubicacion: 'Simulado',
        fecha: '01/01/2025',
        cupos: 20,
        imgs: [],
      },
    ],
  };

  useEffect(() => {
    console.log('Consultando productos y servicios...');
    fetch('https://www.clinicatecnologica.cl/ipss/tejelanasVivi/api/v1/products-services/', {
      headers: {
        Authorization: 'Bearer ipss.get',
      },
    })
      .then(response => {
        if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
        return response.json();
      })
      .then(data => {
        setProductos(data.data.productos);
        setServicios(data.data.servicios);
      })
      .catch(err => {
        setError('Mostrando productos y servicios simulados');
        setProductos(fallback.productos);
        setServicios(fallback.servicios);
      });
  }, []);

  return (
    <section className="products">
      <h2>Productos</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className="product-list">
        {productos.map((p, i) => (
          <div key={i} className="product-card">
            {p.imgs[0] && <img src={p.imgs[0]} alt={p.nombre} />}
            <h3>{p.nombre}</h3>
            <p>{p.descripcion}</p>
            <p><strong>Precio:</strong> ${p.precio.toLocaleString()}</p>
            {p.colores?.length > 0 && (
              <p><strong>Colores:</strong> {p.colores.join(', ')}</p>
            )}
            {p.tallas?.length > 0 && (
              <p><strong>Tallas:</strong> {p.tallas.join(', ')}</p>
            )}
          </div>
        ))}
      </div>

      <h2>Servicios / Talleres</h2>
      <div className="product-list">
        {servicios.map((s, i) => (
          <div key={i} className="product-card">
            {s.imgs[0] && <img src={s.imgs[0]} alt={s.nombre} />}
            <h3>{s.nombre}</h3>
            <p><strong>Ubicación:</strong> {s.ubicacion}</p>
            <p><strong>Fecha:</strong> {s.fecha}</p>
            <p><strong>Cupos:</strong> {s.cupos}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
