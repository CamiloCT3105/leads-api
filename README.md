# 🚀 Leads API

API REST para gestión de leads con integración de inteligencia artificial, construida como solución para prueba técnica.

---

# 📌 Descripción

Este proyecto permite:

* Registrar leads desde diferentes fuentes de marketing
* Consultarlos con filtros y paginación
* Obtener estadísticas clave
* Generar un resumen inteligente usando IA (mock preparado para LLM real)

---

# 🛠️ Tecnologías usadas

* Node.js
* Express.js
* MongoDB (Atlas)
* Mongoose
* Swagger (OpenAPI)
* express-rate-limit

---

# ⚙️ Instalación

## 1. Clonar repositorio

```bash
git clone https://github.com/CamiloCT3105/leads-api.git
cd leads-api
```

## 2. Instalar dependencias

```bash
npm install
```

---

# 🔐 Variables de entorno

Crear archivo `.env` en la raíz:

```env
PORT=3000
MONGO_URI=mongodb://admin:jc20031@ac-bh54uqf-shard-00-00.4phepwm.mongodb.net:27017,ac-bh54uqf-shard-00-01.4phepwm.mongodb.net:27017,ac-bh54uqf-shard-00-02.4phepwm.mongodb.net:27017/?ssl=true&replicaSet=atlas-zxait5-shard-0&authSource=admin&appName=Cluster0

```

---

# ▶️ Ejecutar proyecto

```bash
npm run dev
```
o

```bash
node server.js
```

---

# 🌱 Seed (datos de prueba)

Para cargar datos iniciales:

```bash
npm run seed
```

Esto insertará 10 leads de ejemplo en la base de datos.

---

# 🌍 Deploy

API desplegada en:

👉 https://leads-api-0xwe.onrender.com

Swagger disponible en:

👉 https://leads-api-0xwe.onrender.com/api-docs

---

# 📚 Documentación (Swagger)

Accede a:

```bash
http://localhost:3000/api-docs
```

o en producción:

```bash
https://leads-api-0xwe.onrender.com/api-docs
```

Desde ahí puedes probar todos los endpoints.

---

# 📌 Endpoints

## 🔹 Crear lead

POST /leads

```json
{
  "nombre": "Juan Perez",
  "email": "juan@test.com",
  "telefono": "3001234567",
  "fuente": "instagram",
  "producto_interes": "Curso",
  "presupuesto": 100
}
```

---

## 🔹 Listar leads

GET /leads?page=1&limit=10&fuente=instagram

Filtros:

* page
* limit
* fuente
* startDate
* endDate

---

## 🔹 Obtener lead por ID

GET /leads/:id

---

## 🔹 Actualizar lead

PATCH /leads/:id

---

## 🔹 Eliminar lead (soft delete)

DELETE /leads/:id

---

## 🔹 Estadísticas

GET /leads/stats

Retorna:

* total de leads
* leads por fuente
* promedio de presupuesto
* leads últimos 7 días

---

## 🔹 IA - Resumen

POST /leads/ai/summary

Body opcional:

```json
{
  "fuente": "instagram",
  "startDate": "2025-01-01",
  "endDate": "2025-12-31"
}
```

---

# 🤖 Integración con IA

Se implementó un servicio desacoplado (`ai.service.js`) que:

1. Recibe los leads filtrados
2. Genera un resumen ejecutivo
3. Retorna análisis, fuente principal y recomendaciones

Actualmente se utiliza un **mock inteligente**, pero la arquitectura está preparada para integrarse fácilmente con un LLM real como OpenAI.

---

# ⚡ Rate Limiting

Se implementó limitación de peticiones:

* Máximo 100 requests por IP cada 15 minutos

Esto protege la API contra abuso.

---

# 🧠 Decisiones técnicas

* Se utilizó MongoDB Atlas por facilidad de despliegue
* Se implementó soft delete para mantener integridad de datos
* Se separó lógica en capas (routes, controllers, services)
* Se preparó arquitectura para integración con IA real

---

# 🧪 Pruebas

Los endpoints pueden ser probados mediante:

* Swagger UI
* Postman

---

# 📦 Estructura del proyecto

```
src/
 ├── controllers/
 ├── models/
 ├── routes/
 ├── services/
 ├── middlewares/
 ├── seed/
 └── config/
```

---

# 📌 Notas finales

* No se requiere frontend
* La API está lista para producción básica
* La integración con IA puede escalar fácilmente a servicios reales

---

# 👨‍💻 Autor

Juan Camilo Cañas Toro. 

Desarrollado como prueba técnica backend.
