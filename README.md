# 🥐 Santo Bocado API

API REST para la administración de productos de Santo Bocado.

Este proyecto permite gestionar productos desde un dashboard administrativo mediante operaciones CRUD, utilizando Node.js, Express, PostgreSQL y Prisma ORM.

## 🚀 Tecnologías

- Node.js
- Express.js
- PostgreSQL
- Prisma ORM
- Nodemon
- Thunder Client

## 📁 Estructura del proyecto

```bash
santo-bocado-api/
│
├── prisma/
│   ├── migrations/
│   └── schema.prisma
│
├── src/
│   ├── config/
│   │   └── prisma.js
│   │
│   ├── controllers/
│   │
│   ├── middleware/
│   │
│   ├── routes/
│   │
│   ├── services/
│   │
│   └── server.js
│
├── .env
├── package.json
└── README.md
```

## ⚙️ Instalación

Clonar repositorio:

```bash
git clone URL_REPOSITORIO
```

Ingresar carpeta:

```bash
cd santo-bocado-api
```

Instalar dependencias:

```bash
pnpm install
```

## 🔥 Variables de entorno

Crear archivo `.env`

```env
DATABASE_URL="postgresql://usuario:password@localhost:5432/santo_bocado"
```

## 🗄️ Migraciones Prisma

Ejecutar migraciones:

```bash
npx prisma migrate dev
```

Generar cliente Prisma:

```bash
npx prisma generate
```

## ▶️ Ejecutar proyecto

Modo desarrollo:

```bash
pnpm dev
```

Servidor disponible:

```
http://localhost:3000
```

## 📦 Modelo Product

```prisma
model Product {

  id          Int      @id @default(autoincrement())
  name        String
  description String?
  price       Float
  priceDetail String?
  imageUrl    String?
  stock       Int      @default(0)
  active      Boolean  @default(true)

  createdAt   DateTime @default(now())
  updatedAt   DateTime @default(now()) @updatedAt

}
```

## 📌 Endpoints

### Obtener productos

```http
GET /products
```

### Crear producto

```http
POST /products
```

Body:

```json
{
  "name":"New York Roll Pistacho",
  "description":"Relleno cremoso",
  "price":8500,
  "priceDetail":"Unidad",
  "stock":20,
  "active":true
}
```

### Actualizar producto

```http
PUT /products/:id
```

### Eliminar producto

```http
DELETE /products/:id
```

## 🎯 Funcionalidades

- Crear productos
- Editar productos
- Eliminar productos
- Consultar productos
- Gestión de stock
- Activación y desactivación de productos
- Arquitectura por capas

## 📈 Próximas mejoras

- Categorías
- Dashboard administrativo
- Carga de imágenes
- Autenticación administrador
- Estadísticas de ventas
- Filtros y búsqueda

---

Desarrollado para Santo Bocado 🥐