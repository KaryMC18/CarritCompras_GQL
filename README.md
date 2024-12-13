# Proyecto: Carrito React GraphQL

## Descripción

Este proyecto es una aplicación de comercio electrónico que combina **React** para el frontend y **GraphQL** en el backend. Proporciona una API robusta para gestionar usuarios, productos, pedidos y pagos. Está diseñado para ser modular, escalable y fácil de mantener.

## Características Principales

- **GraphQL API**: Implementada con Apollo Server para operaciones eficientes y flexibles.
- **Base de Datos**: MongoDB utilizando Mongoose para el manejo de datos.
- **Procesamiento de Pagos**: Integración con Stripe.
- **Notificaciones**: Uso de Twilio para el envío de mensajes SMS.
- **Automatización de Navegador**: Generación de recibos y PDFs mediante Puppeteer.

---

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalados los siguientes requisitos:

- **Node.js**: Versión 14 o superior.
- **MongoDB**: Instancia local o en la nube.
- **npm** o **yarn**: Para la instalación de dependencias.
- **Git**: Para clonar el repositorio y manejar el control de versiones.

---

## Instalación

1. **Clona el Repositorio**
   ```bash
   git clone https://github.com/KaryMC18/CarritCompras_GQL.git
   ```

2. **Accede al Directorio del Proyecto**
   ```bash
   cd carrito-react-graphql
   ```

3. **Instala las Dependencias**
   Usando npm:
   ```bash
   npm install
   ```
   O usando yarn:
   ```bash
   yarn install
   ```

4. **Configura las Variables de Entorno**
   Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:
   ```env
   PORT=4000
   MONGO_URI=mongodb://localhost:27017/carrito
   STRIPE_API_KEY=<TU_API_KEY_DE_STRIPE>
   TWILIO_ACCOUNT_SID=<TU_TWILIO_ACCOUNT_SID>
   TWILIO_AUTH_TOKEN=<TU_TWILIO_AUTH_TOKEN>
   ```

---

## Scripts Disponibles

En el archivo `package.json`, hay scripts predefinidos para gestionar el ciclo de vida del proyecto:

- **`npm run dev`**: Inicia el servidor en modo desarrollo.
- **`npm start`**: Inicia el servidor en modo producción.
- **`npm run test`**: Ejecuta pruebas (placeholder, aún no configurado).

---

## Uso del Proyecto

### Modo Desarrollo
Ejecuta el siguiente comando para iniciar el proyecto en modo desarrollo:
```bash
npm run dev
```
El servidor estará disponible en `http://localhost:4000` o el puerto configurado en `.env`.

### Modo Producción
Para iniciar el proyecto en producción, ejecuta:
```bash
npm start
```

---

## Dependencias Principales

El proyecto utiliza las siguientes tecnologías:

- **Apollo Server**: Para manejar las solicitudes GraphQL.
- **Express**: Framework para el backend.
- **Mongoose**: ORM para MongoDB.
- **Stripe**: Para el manejo de pagos.
- **Twilio**: Para el envío de notificaciones SMS.
- **Puppeteer**: Generación automatizada de documentos.

---

## Contribución

Si deseas contribuir al proyecto:

1. Haz un fork del repositorio.
2. Crea una rama para tus cambios:
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```
3. Realiza tus cambios y haz commit:
   ```bash
   git commit -m "Agrega nueva funcionalidad"
   ```
4. Envía tus cambios:
   ```bash
   git push origin feature/nueva-funcionalidad
   ```
5. Crea un Pull Request.

---

## Licencia

Este proyecto está bajo una licencia abierta.

