import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { Router } from "./client/Routes/Router.tsx";
import { ThemeProvider } from "./client/context/ThemeContext.tsx";
import { AuthProvider } from "./client/context/AuthContext.tsx";

function start() {
  const root = createRoot(document.getElementById("root")!);
  root.render(
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider>
          <Router />
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", start);
} else {
  start();
}
