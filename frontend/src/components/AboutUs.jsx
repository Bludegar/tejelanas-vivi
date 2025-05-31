import { useEffect, useState } from 'react';
import './AboutUs.css';

function AboutUs() {
  const [info, setInfo] = useState('');
  const [error, setError] = useState(null);

  const fallbackInfo =
    'Somos Tejelanas Vivi, un emprendimiento local de Laguna de Zapallar dedicado al arte del tejido. Ofrecemos lanas naturales, vellón y talleres comunitarios para fomentar la creatividad y el tejido colectivo.';

  useEffect(() => {
    fetch('https://www.clinicatecnologica.cl/ipss/tejelanasVivi/api/v1/about-us/', {
      headers: {
        Authorization: 'Bearer ipss.get',
      },
    })
      .then(response => {
        if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
        return response.json();
      })
      .then(data => {
        const cleanedText = data.data.replaceAll('"', '');
        setInfo(cleanedText);
      })
      .catch(err => {
        setError('Mostrando información local (API no respondió)');
        setInfo(fallbackInfo);
      });
  }, []);

  return (
    <section className="about-us">
      <h2>¿Quiénes somos?</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <p>{info}</p>
    </section>
  );
}

export default AboutUs;




