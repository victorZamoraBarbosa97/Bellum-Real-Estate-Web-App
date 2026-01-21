# Bellum Real Estate Web App

Plataforma web moderna para bienes raíces desarrollada con un enfoque en alto rendimiento y experiencia de usuario fluida. Incluye un panel de administración protegido y un sistema de temas (Dark/Light mode).

## 🚀 Tech Stack

- **Runtime & Bundler:** [Bun](https://bun.sh) (v1.x)
- **Frontend:** React 19 + TailwindCSS v4
- **Backend:** Bun Native Server (API REST)
- **Base de Datos:** SQLite (Local)
- **Autenticación:** Firebase Auth + Verificación de Whitelist en Backend
- **Iconos:** Lucide React

## 📋 Prerrequisitos

- Tener instalado [Bun](https://bun.sh).
- Una cuenta de Firebase configurada.

## 🛠️ Instalación

1. Clonar el repositorio:

   ```bash
   git clone <URL_DEL_REPO>
   cd RealStateWebApp
   ```

2. Instalar dependencias:

   ```bash
   bun install
   ```

3. Configurar variables de entorno:
   Crea un archivo `.env` en la raíz del proyecto con las credenciales de Firebase (ver `bunfig.toml` para referencia de prefijos):

   ```env
   BUN_PUBLIC_FIREBASE_API_KEY=...
   BUN_PUBLIC_FIREBASE_AUTH_DOMAIN=...
   BUN_PUBLIC_FIREBASE_PROJECT_ID=...
   BUN_PUBLIC_FIREBASE_STORAGE_BUCKET=...
   BUN_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
   BUN_PUBLIC_FIREBASE_APP_ID=...
   BUN_PUBLIC_FIREBASE_MEASUREMENT_ID=...
   ```

   > **Nota:** Para el panel de administración, asegúrate de tener el archivo `service-account.json` en la raíz (este archivo está ignorado por git por seguridad).

## ▶️ Ejecución

Para iniciar el servidor de desarrollo (Backend + Frontend Builder):

```bash
bun run src/api/index.ts
```

El servidor iniciará generalmente en `http://localhost:3000`.

## 📂 Estructura del Proyecto

- `/src/api`: Lógica del servidor Bun, rutas y modelos SQLite.
- `/src/client`: Código fuente del Frontend (React).
- `/src/client/features`: Módulos funcionales (ej. Auth).
- `/db`: Archivos de base de datos SQLite (ignorados por git).

## 🔐 Seguridad

El proyecto utiliza un sistema de doble verificación:

1. **Firebase Auth:** Maneja la identidad del usuario en el cliente.
2. **Backend Check:** El servidor verifica contra una base de datos SQLite si el email tiene permisos de acceso antes de permitir la entrada al panel de administración.

---

Desarrollado con ❤️ usando Bun.
