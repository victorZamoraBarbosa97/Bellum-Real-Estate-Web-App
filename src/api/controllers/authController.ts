import { db } from "../config/db";
import { signToken } from "../middleware/auth";

export const login = async (req: Request) => {
  try {
    const body = await req.json();
    const { email } = body;

    // Verificar si está en la whitelist
    const user = db
      .prepare("SELECT * FROM allowed_users WHERE email = ?")
      .get(email) as any;

    if (!user) {
      return Response.json(
        { authorized: false, message: "⛔ Email no autorizado" },
        { status: 403 }
      );
    }

    // Generar JWT propio del backend
    const token = signToken({ email: user.email, role: user.role });

    return Response.json({ authorized: true, user, token });
  } catch (error) {
    return new Response("Bad Request", { status: 400 });
  }
};
