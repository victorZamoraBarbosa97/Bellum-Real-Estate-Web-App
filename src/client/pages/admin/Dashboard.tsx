import { useAuth } from "../../context/AuthContext";

export const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-(--bg-primary) text-(--text-primary) p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header del Dashboard */}
        <div className="bg-(--bg-secondary) rounded-xl shadow-sm border border-(--border-color) p-6 mb-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold">Panel de Administración</h1>
            <p className="text-(--text-secondary)">Bienvenido, {user?.email}</p>
          </div>
          <button
            onClick={() => logout()}
            className="px-5 py-2.5 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium transition-colors shadow-sm"
          >
            Cerrar Sesión
          </button>
        </div>

        {/* Contenido de Ejemplo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-(--bg-secondary) p-6 rounded-xl border border-(--border-color) shadow-sm">
            <h3 className="font-semibold text-lg mb-2">Propiedades Activas</h3>
            <p className="text-3xl font-bold text-(--color-blue-main) dark:text-(--color-yellow-main)">
              0
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
