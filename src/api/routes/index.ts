import { login } from "../controllers/authController";
import {
  getProperties,
  createProperty,
} from "../controllers/propertyController";

export const apiRouter = async (req: Request) => {
  const url = new URL(req.url);
  const method = req.method;

  // --- RUTAS DE AUTH ---
  // Mantenemos compatibilidad con tu frontend (/check-access) pero ahora devuelve JWT
  if (url.pathname === "/api/auth/check-access" && method === "POST") {
    return login(req);
  }

  // --- RUTAS DE PROPIEDADES ---
  if (url.pathname === "/api/properties") {
    if (method === "GET") return getProperties();
    if (method === "POST") return createProperty(req);
  }

  if (url.pathname === "/api/hello") {
    return Response.json({ message: "Hello from Bun API!" });
  }

  return new Response("Not Found", { status: 404 });
};
