# 📘 Guía de Buenas Prácticas – Tejelanas Vivi

Este documento contiene las buenas prácticas aplicadas en el desarrollo de la landing page del emprendimiento Tejelanas Vivi, usando React como framework principal.

---

## 🧱 1. Convenciones de Nomenclatura

- Componentes en **PascalCase**: `ProductCard.jsx`, `ImageCarousel.jsx`
- Variables y funciones en **camelCase**: `handleContact`, `selectedProduct`
- Archivos `.jsx` por componente
- Estilos separados por componente en archivos `.css` del mismo nombre

---

## 🗂️ 2. Estructura de Archivos

/src
├── components/
│ ├── ProductCard.jsx
│ ├── ContactForm.jsx
│ ├── Navbar.jsx
│ ├── ImageCarousel.jsx
├── styles.css
├── App.jsx
├── index.js


- `components/` para componentes reutilizables
- `public/images/` para imágenes optimizadas
- Separación clara de responsabilidades

---

## 🌐 3. Accesibilidad (WCAG)

- Todas las imágenes incluyen `alt` descriptivo
- Navegación con teclado en carrusel (Swiper)
- Enlaces accesibles con texto claro
- Contraste de color suficiente
- Inputs correctamente etiquetados (`<label>`)

---

## 🤝 4. Usabilidad

- Diseño centrado en el usuario
- Botones visibles y fáciles de identificar
- Formulario con campos obligatorios
- Navegación clara entre secciones con barra superior fija
- Scroll automático hacia el formulario al hacer clic en “Contáctanos”

---

## ♻️ 5. Reutilización de Componentes

- `ProductCard` se utiliza múltiples veces cambiando props
- `ImageCarousel` acepta cualquier arreglo de imágenes
- `ContactForm` es reutilizable y controlado por props

---

## 🔐 6. Validaciones y Seguridad

- Validación en cliente: campos obligatorios y correo válido
- Campo de producto no editable (`readOnly`)
- Inputs sanitizados sin uso de `eval` ni HTML peligroso
- Posible extensión con honeypot o captcha si fuera necesario

---

## ⚙️ 7. Control de Versiones (Git y GitHub)

- Uso de Git con commits frecuentes y descriptivos
- Ramas separadas por funcionalidad: `feature/form`, `feature/carousel`
- Repositorio público en GitHub con `README.md` y documentación
- Historial de cambios accesible

---

## 📈 8. Optimización

- Imágenes comprimidas con herramientas externas (como TinyPNG)
- Uso de `loading="lazy"` en imágenes
- Separación de código por componentes
- Evita recargas innecesarias en `useEffect`

---

## 🧠 9. Estilo de Código

- Indentación consistente de 2 espacios
- Código limpio y ordenado
- Comentarios donde es necesario
- Nombrado claro de funciones y variables

---

## 💙 10. Buenas Prácticas con React

- Uso de componentes funcionales (`function`)
- Manejo de estado con `useState` y efectos con `useEffect`
- Props utilizados correctamente para pasar información entre componentes
- Código desacoplado y fácil de mantener

---
