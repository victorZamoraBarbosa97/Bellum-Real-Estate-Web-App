import { serve } from "bun";
import path from "path";
import { initModels } from "./models/init";
import { apiRouter } from "./routes/index";

// 1. Inicializar Modelos (Tablas y Seeds)
initModels();

// --- OPTIMIZACIÓN: Configuración del Build ---
const isProduction = process.env.NODE_ENV === "production";
let productionBuildArtifact: Blob | null = null;

// Helper para extraer variables de entorno seguras para el cliente
const getClientEnv = () => {
  const environmentVars: Record<string, string> = {};
  for (const key in process.env) {
    if (key.startsWith("BUN_PUBLIC_")) {
      environmentVars[`import.meta.env.${key}`] = JSON.stringify(
        process.env[key]
      );
    }
  }
  return environmentVars;
};

// En PRODUCCIÓN: Compilar una sola vez al iniciar el servidor
if (isProduction) {
  console.log("🏗️ Construyendo frontend para producción...");
  const build = await Bun.build({
    entrypoints: [path.join(import.meta.dir, "../frontend.tsx")],
    minify: true,
    define: getClientEnv(),
  });

  if (build.success) {
    productionBuildArtifact = build.outputs[0] ?? null;
    console.log("✅ Build completado exitosamente.");
  } else {
    console.error("❌ Error en el build:", build.logs);
    process.exit(1); // Detener si falla el build en prod
  }
}

const server = serve({
  async fetch(req) {
    const url = new URL(req.url);

    // ---------------------------------------------------------
    // 1. API Routes (Manejo más limpio)
    // ---------------------------------------------------------
    if (url.pathname.startsWith("/api")) {
      return apiRouter(req);
    }

    // ---------------------------------------------------------
    // 2. Frontend Build (React)
    // ---------------------------------------------------------
    // NOTA: En producción, esto debería hacerse UNA vez antes de iniciar el server,
    // no en cada petición. Para desarrollo está bien, pero es lento.
    if (
      url.pathname.endsWith("frontend.tsx") ||
      url.pathname.endsWith("frontend.js")
    ) {
      // A. PRODUCCIÓN: Servir desde memoria (Rapidísimo ⚡)
      if (isProduction && productionBuildArtifact) {
        return new Response(productionBuildArtifact, {
          headers: { "Content-Type": "application/javascript" },
        });
      }

      // B. DESARROLLO: Recompilar en cada petición (Para ver cambios en vivo)
      const build = await Bun.build({
        entrypoints: [path.join(import.meta.dir, "../frontend.tsx")],
        minify: false,
        define: getClientEnv(),
      });

      if (!build.success) {
        return new Response(build.logs.join("\n"), { status: 500 });
      }
      return new Response(build.outputs[0]);
    }

    // ---------------------------------------------------------
    // 3. Static Files
    // ---------------------------------------------------------
    const publicFile = Bun.file(`./public${decodeURIComponent(url.pathname)}`);
    if (await publicFile.exists()) {
      return new Response(publicFile);
    }

    // ---------------------------------------------------------
    // 4. SPA Fallback
    // ---------------------------------------------------------
    return new Response(Bun.file("./src/index.html"));
  },

  development: process.env.NODE_ENV !== "production" && {
    hmr: true,
    console: true,
  },
});

console.log(`🚀 Server running at ${server.url}`);
