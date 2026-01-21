import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET || "dev_secret_key_12345";

// Generar Token (Al hacer login)
export const signToken = (payload: object) => {
  return jwt.sign(payload, SECRET, { expiresIn: "7d" });
};

// Verificar Token (Middleware)
export const verifyToken = (token: string | undefined) => {
  if (!token) return null;
  try {
    return jwt.verify(token, SECRET);
  } catch (error) {
    return null;
  }
};

// Helper para proteger rutas
export const requireAuth = (req: Request) => {
  const authHeader = req.headers.get("Authorization");
  if (!authHeader) return null;

  const token = authHeader.split(" ")[1]; // "Bearer <token>"
  return verifyToken(token);
};
