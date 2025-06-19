# 🚀 ExpressJS Workshop – Portfolio API Migration

Este proyecto es un **workshop práctico** donde se realiza la **migración de una API construida originalmente en Java 21 con Spring Boot**, repositorio del proyecto [Aquí](https://github.com/crisortegamunoz/portfolio-api), hacia una nueva versión implementada con **ExpressJS** (Node.js).

🎯 **Objetivo**: Reescribir la API de un portafolio profesional, modernizando su arquitectura y aprovechando la ligereza y flexibilidad de ExpressJS.

📚 **Stack Tecnológico**
- Backend: [ExpressJS](https://expressjs.com/) ⚡
- ORM: [Prisma](https://www.prisma.io/) 📦
- Base de datos: [PostgreSQL](https://www.postgresql.org/) 🐘

---

## 🗃️ Estructura de la Base de Datos

La base de datos está diseñada para manejar todos los aspectos del portafolio, incluyendo información personal, habilidades, experiencias, certificados y proyectos. Aquí te presentamos un resumen de las tablas principales:

| Tabla                  | Descripción |
|------------------------|-------------|
| `about_me`             | Información personal y resumen general del profesional 👤 |
| `about_me_boxes`       | Secciones destacadas dentro del perfil: tecnologías, liderazgo, planificación, etc. 📦 |
| `categories`           | Clasificación reutilizable para experiencias, habilidades, certificados, y más 🏷️ |
| `technologies`         | Tecnologías utilizadas a lo largo del portafolio 🛠️ |
| `skills`               | Conjunto de habilidades técnicas y de conocimiento, algunas con porcentaje 📊 |
| `experiences`          | Experiencias laborales o educativas 📅 |
| `experience_responsibilities` | Responsabilidades asociadas a cada experiencia laboral 📌 |
| `certificates`         | Certificaciones obtenidas 🎓 |
| `portfolios`           | Proyectos profesionales destacados 🧠 |
| `portfolio_technologies` | Relación N:M entre proyectos y tecnologías aplicadas 🔄 |

---

## ⚙️ Dependencias

Estas son las dependencias principales del proyecto y sus versiones utilizadas en el `package.json`:

```json
"dependencies": {
  "@prisma/client": "^6.9.0",     // ORM para interactuar con PostgreSQL
  "body-parser": "^2.2.0",        // Middleware para parsear request body
  "dotenv": "^16.5.0",            // Cargar variables de entorno desde .env
  "express": "^5.1.0"             // Framework web para Node.js
}
