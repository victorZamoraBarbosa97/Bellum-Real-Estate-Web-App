import { Routes, Route } from "react-router";
import { Login } from "../pages/public/Login";
import { App } from "../App";
import { NotFound } from "../pages/public/NotFound";
import { Dashboard } from "../pages/admin/Dashboard";
import { ProtectedRoute } from "../components/layout/ProtectedRoute";

export const Router = () => {
  return (
    <Routes>
      {/* --- RUTAS PÚBLICAS --- */}
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />

      {/* --- RUTAS PROTEGIDAS (ADMIN) --- */}
      <Route element={<ProtectedRoute />}>
        <Route path="/admin" element={<Dashboard />} />
        {/* Aquí agregarías más rutas privadas como /admin/properties, etc. */}
      </Route>

      {/* --- 404 --- */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
