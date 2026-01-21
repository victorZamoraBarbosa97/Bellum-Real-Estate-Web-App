import { useNavigate } from "react-router";
import { useTheme } from "../../context/ThemeContext";
import { Logo } from "../../components/ui/Logo";
import { useLogin } from "../../features/auth/hooks/useLogin";
import { LoginBackground } from "../../features/auth/components/LoginBackground";
import { LoginForm } from "../../features/auth/components/LoginForm";
import { SocialLogin } from "../../features/auth/components/SocialLogin";

export const Login = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const {
    email,
    setEmail,
    password,
    setPassword,
    error,
    loading,
    handleLogin,
    handleGoogleLogin,
  } = useLogin();

  return (
    // CONTENEDOR PRINCIPAL
    <div className="relative min-h-screen w-full grid place-items-center overflow-hidden transition-colors duration-300 bg-(--bg-primary) text-(--text-primary)">
      <LoginBackground />

      {/* Botón Volver */}
      <button
        onClick={() => navigate("/")}
        type="button"
        className="
          absolute z-10 top-4 left-4 sm:top-6 sm:left-6 
          flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 
          backdrop-blur-md rounded-full shadow-sm hover:shadow-md
          transition-all duration-300 ease-out active:scale-95
          
          bg-(--input-bg)/80 
          border border-(--border-color)
          text-(--text-secondary)
          hover:text-(--text-primary)
          hover:border-(--color-blue-3)
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.8}
          stroke="currentColor"
          className="w-4 h-4 sm:w-5 sm:h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
        <span>Volver</span>
      </button>

      {/* Botón Toggle Tema */}
      <button
        onClick={toggleTheme}
        type="button"
        className="
          absolute z-10 top-4 right-4 sm:top-6 sm:right-6 p-2.5
          backdrop-blur-md rounded-full shadow-sm hover:shadow-md
          transition-all duration-300 active:scale-95
          
          bg-(--input-bg)/80 
          border border-(--border-color)
          text-(--text-secondary)
          hover:text-(--color-yellow-main) 
        "
      >
        {theme === "dark" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
          </svg>
        )}
      </button>

      {/* TARJETA DE LOGIN */}
      <div
        className="
          relative z-10 w-full max-w-100 mx-4 p-8 sm:p-10 
          rounded-2xl shadow-2xl transition-colors duration-300
          
          /* Fondo de la tarjeta y Borde */
          bg-(--input-bg) 
          border border-(--border-color)
          dark:shadow-black/50
        "
      >
        <Logo className="w-32 h-auto mx-auto mb-6" />

        <h2 className="text-3xl font-bold mb-2 text-center text-(--text-primary) tracking-tight">
          Admin Panel
        </h2>

        <h3 className="text-center text-(--text-secondary) mb-8 text-sm font-medium">
          Ingresa tus credenciales
        </h3>

        {error && (
          <div className="mb-4 p-3 text-sm text-red-600 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-center">
            {error}
          </div>
        )}

        <LoginForm
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          loading={loading}
          onSubmit={handleLogin}
        />

        <div className="mt-5">
          <SocialLogin onGoogleLogin={handleGoogleLogin} />
        </div>
      </div>
    </div>
  );
};
