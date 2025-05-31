import React, { useState, useEffect } from 'react';
import './ContactForm.css';

function ContactForm({ selectedProduct }) {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    producto: '',
    mensaje: ''
  });

  useEffect(() => {
    setFormData((prev) => ({ ...prev, producto: selectedProduct }));
  }, [selectedProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Mensaje enviado:\n${JSON.stringify(formData, null, 2)}`);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2>Contáctanos</h2>
      <label>Nombre:
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
      </label>

      <label>Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>

      <label>Producto:
        <input
          type="text"
          name="producto"
          value={formData.producto}
          readOnly
        />
      </label>

      <label>Mensaje:
        <textarea
          name="mensaje"
          rows="4"
          value={formData.mensaje}
          onChange={handleChange}
          required
        />
      </label>

      <button type="submit">Enviar</button>
    </form>
  );
}

export default ContactForm;
