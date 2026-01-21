import { Database } from "bun:sqlite";

// Singleton de la base de datos
export const db = new Database("realstate.db");
