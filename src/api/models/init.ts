import { db } from "../config/db";

export const initModels = () => {
  // 1. Tabla de Propiedades
  db.run(`
    CREATE TABLE IF NOT EXISTS properties (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      price REAL
    );
  `);

  // 2. Tabla de Usuarios Autorizados (Lista Blanca)
  db.run(`
    CREATE TABLE IF NOT EXISTS allowed_users (
      email TEXT PRIMARY KEY,
      role TEXT DEFAULT 'user',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);

  // --- SEED: Admin Inicial ---
  const seedAdmin = db.prepare(
    "INSERT OR IGNORE INTO allowed_users (email, role) VALUES (?, ?)"
  );
  seedAdmin.run("victor.ernesto.z97@gmail.com", "admin");
};
