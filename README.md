# Tejelanas Vivi 🧶

Este es el sitio web de Tejelanas Vivi, un emprendimiento que vende lanas naturales y hace talleres de crochet en Laguna de Zapallar. El sitio fue hecho como parte de la evaluación de Frontend y Backend.

## ¿Qué incluye el proyecto?

- Página web en React con diseño responsivo
- Carrusel de imágenes en la portada
- Sección "Quiénes somos"
- Productos y servicios cargados desde una API
- Preguntas frecuentes
- Formulario de contacto con validaciones
- Backend en PHP con operaciones CRUD simuladas
- Documentación Swagger de los endpoints

## ¿Cómo lo corro?

### Frontend (React)

```bash
cd frontend
npm install
npm start
```

### Backend (PHP)

1. Instala XAMPP
2. Mueve la carpeta `backend/` a `htdocs/`
3. Asegúrate de que Apache esté prendido
4. Entra a: `http://localhost/backend/productos.php`

## Autenticación

La API externa necesita esta cabecera:

```
Authorization: Bearer ipss.get
```

## Integrantes

- Jose Espinoza (Blu)