import { useEffect, useState } from 'react';
import './Faq.css';

function Faq() {
  const [faqs, setFaqs] = useState([]);
  const [error, setError] = useState(null);

  const fallbackFaqs = [
    {
      titulo: '¿Dónde se realizan los talleres?',
      respuesta: 'En Laguna de Zapallar y en eventos itinerantes como ferias locales.',
    },
    {
      titulo: '¿Hacen envíos a regiones?',
      respuesta: 'Sí, trabajamos con Starken y Chilexpress a todo Chile.',
    },
  ];

  useEffect(() => {
    fetch('https://www.clinicatecnologica.cl/ipss/tejelanasVivi/api/v1/faq/', {
      headers: {
        Authorization: 'Bearer ipss.get',
      },
    })
      .then(res => {
        if (!res.ok) throw new Error(`Error HTTP: ${res.status}`);
        return res.json();
      })
      .then(data => {
        console.log('FAQ recibidas:', data);
        setFaqs(data.data.filter(f => f.activo));
      })
      .catch(err => {
        console.warn('Error al cargar FAQ. Usando datos simulados.', err.message);
        setError('Mostrando preguntas frecuentes simuladas');
        setFaqs(fallbackFaqs);
      });
  }, []);

  return (
    <section className="faq" id="faq">
      <h2>Preguntas Frecuentes</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className="faq-list">
        {faqs.map((item, index) => (
          <details key={index} className="faq-item">
            <summary>{item.titulo}</summary>
            <p>{item.respuesta}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export default Faq;
