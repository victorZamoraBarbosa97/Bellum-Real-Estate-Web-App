import { db } from "../config/db";
import { requireAuth } from "../middleware/auth";

export const getProperties = () => {
  const properties = db.prepare("SELECT * FROM properties").all();
  return Response.json(properties);
};

export const createProperty = async (req: Request) => {
  // 🔒 Protección JWT
  const user = requireAuth(req);
  if (!user) {
    return new Response("Unauthorized", { status: 401 });
  }

  const body = await req.json();
  const insert = db.prepare(
    "INSERT INTO properties (title, price) VALUES ($title, $price)"
  );
  const result = insert.run({
    $title: body.title || "Nueva Propiedad",
    $price: body.price || 0,
  });

  return Response.json({ success: true, id: result.lastInsertRowid });
};
