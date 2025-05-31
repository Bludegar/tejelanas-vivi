import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [form, setForm] = useState({
    nombre: '',
    correo: '',
    mensaje: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validar = () => {
    const newErrors = {};
    if (!form.nombre.trim()) newErrors.nombre = 'El nombre es obligatorio.';
    if (!form.correo.trim()) {
      newErrors.correo = 'El correo es obligatorio.';
    } else if (!/\S+@\S+\.\S+/.test(form.correo)) {
      newErrors.correo = 'El correo no es válido.';
    }
    if (!form.mensaje.trim()) newErrors.mensaje = 'El mensaje es obligatorio.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validados = validar();
    if (Object.keys(validados).length > 0) {
      setErrors(validados);
    } else {
      console.log('Formulario enviado:', form);
      alert('¡Gracias por tu mensaje!');
      setForm({ nombre: '', correo: '', mensaje: '' });
      setErrors({});
    }
  };

  return (
    <section className="contact" id="contact">
      <h2>Contáctanos</h2>
      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input
          type="text"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
        />
        {errors.nombre && <span className="error">{errors.nombre}</span>}

        <label>Correo:</label>
        <input
          type="email"
          name="correo"
          value={form.correo}
          onChange={handleChange}
        />
        {errors.correo && <span className="error">{errors.correo}</span>}

        <label>Mensaje:</label>
        <textarea
          name="mensaje"
          rows="4"
          value={form.mensaje}
          onChange={handleChange}
        />
        {errors.mensaje && <span className="error">{errors.mensaje}</span>}

        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default Contact;
