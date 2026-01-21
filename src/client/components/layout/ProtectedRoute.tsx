import { Navigate, Outlet } from "react-router";
import { useAuth } from "../../context/AuthContext";

export const ProtectedRoute = () => {
  const { user, loading } = useAuth();

  if (loading) {
    // Spinner de carga mientras verificamos sesión
    return (
      <div className="min-h-screen grid place-items-center bg-(--bg-primary) text-(--text-primary)">
        Cargando...
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};
