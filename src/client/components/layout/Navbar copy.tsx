import { useState, useEffect } from "react";
import {
  LayoutDashboard,
  LogOut,
  Menu,
  X,
  Sun,
  Moon,
  Instagram,
  Facebook,
  ChevronRight,
} from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { useTheme } from "../../context/ThemeContext";

function NavLink({
  href,
  label,
  darkText,
  mobile = false,
  onClick,
}: {
  href: string;
  label: string;
  darkText?: boolean;
  mobile?: boolean;
  onClick?: () => void;
}) {
  const baseClasses =
    "font-bold tracking-[0.1em] lg:tracking-[0.2em] uppercase transition-all duration-300 relative group";

  // Lógica de colores mejorada para contraste en Dark Mode
  const desktopClasses = `text-[10px] lg:text-xs ${
    darkText
      ? "text-(--color-navy-dark) hover:text-(--color-blue-1)"
      : "text-(--color-white) hover:text-(--color-blue-4)"
  }`;

  if (mobile) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={`group flex items-center justify-between w-72 py-4 border-b transition-all duration-300 ${
          darkText
            ? "border-(--color-navy-dark)/10 hover:border-(--color-navy-dark) text-(--color-navy-dark)"
            : "border-white/10 hover:border-white text-white"
        }`}
      >
        <span
          className="text-2xl tracking-widest"
          style={{ fontFamily: "Bebas Neue, sans-serif" }}
        >
          {label}
        </span>
        <ChevronRight
          size={20}
          className={`transition-transform duration-300 group-hover:translate-x-1 ${
            darkText ? "text-(--color-blue-main)" : "text-white"
          }`}
        />
      </a>
    );
  }

  return (
    <a
      href={href}
      onClick={onClick}
      className={`${baseClasses} ${desktopClasses}`}
    >
      {label}
      {/* Animación de subrayado (Solo Desktop) */}
      <span
        className={`absolute -bottom-2 left-0 w-0 h-0.5 transition-all duration-300 ease-out group-hover:w-full ${
          darkText ? "bg-(--color-blue-main)" : "bg-(--color-blue-4)"
        }`}
      ></span>
    </a>
  );
}

function ThemeSwitch({
  theme,
  toggleTheme,
  useDarkContent,
  mobile = false,
}: {
  theme: string;
  toggleTheme: () => void;
  useDarkContent?: boolean;
  mobile?: boolean;
}) {
  const isDark = theme === "dark";

  // Estilos del track (fondo del switch)
  let trackClass = "";
  if (mobile) {
    trackClass = "bg-(--color-beige-pale)";
  } else {
    trackClass = useDarkContent
      ? "bg-(--color-beige-pale)"
      : "bg-(--color-white)/20 hover:bg-(--color-white)/30";
  }

  return (
    <button
      onClick={toggleTheme}
      className={`relative w-12 h-6 rounded-full transition-colors duration-300 focus:outline-none ${trackClass}`}
      title="Cambiar Tema"
    >
      <div
        className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow-sm flex items-center justify-center transition-transform duration-300 ${
          isDark ? "translate-x-6" : "translate-x-0"
        }`}
      >
        {isDark ? (
          <Moon size={12} className="text-(--color-blue-main)" />
        ) : (
          <Sun size={12} className="text-(--color-yellow-main)" />
        )}
      </div>
    </button>
  );
}

export function Navbar() {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Bloquear scroll cuando el menú está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  // Lógica de visualización:
  // Queremos contenido oscuro (Logo negro, texto oscuro) SOLO si:
  // Estamos en tema CLARO y (Scrolleado O Menú Abierto).
  // En tema OSCURO, el fondo será oscuro (Navy), por lo que el texto debe ser blanco.
  const useDarkContent = theme === "light" && (scrolled || isMenuOpen);

  const firstName = user?.displayName?.split(" ")[0] || "Admin";

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
        scrolled && !isMenuOpen ? "py-3" : "py-6"
      }`}
    >
      {/* Background Layer */}
      <div
        className={`absolute inset-0 -z-10 transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          isMenuOpen
            ? "opacity-0"
            : scrolled
            ? "opacity-100 bg-(--bg-primary)/95 backdrop-blur-md shadow-lg"
            : "opacity-100 bg-gradient-to-b from-black/60 to-transparent"
        }`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center relative z-50">
        <div className="flex items-center">
          {/* LOGO */}
          <img
            src={
              useDarkContent
                ? "/BELLUM LOGO NEGRO.png"
                : "/BELLUM LOGO BLANCO.png"
            }
            alt="BELLUM"
            className="h-10 md:h-12 w-auto transition-all duration-300 object-contain"
            onError={(e) => {
              e.currentTarget.style.display = "none";
              e.currentTarget.nextElementSibling?.classList.remove("hidden");
            }}
          />
          <span
            className={`hidden text-2xl font-bold tracking-[0.2em] ml-2 transition-colors duration-300 ${
              useDarkContent ? "text-(--color-blue-main)" : "text-white"
            }`}
            style={{ fontFamily: "Bebas Neue, sans-serif" }}
          >
            BELLUM
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
          <NavLink href="#" label="Propiedades" darkText={useDarkContent} />
          <NavLink href="#" label="Desarrollos" darkText={useDarkContent} />
          <NavLink href="#" label="Nosotros" darkText={useDarkContent} />

          {/* Theme Toggle Desktop */}
          <ThemeSwitch
            theme={theme}
            toggleTheme={toggleTheme}
            useDarkContent={useDarkContent}
          />

          {user ? (
            <div className="flex items-center space-x-4 ml-4 pl-4 border-l border-(--color-beige-pale)">
              <span
                className={`text-sm font-medium ${
                  useDarkContent ? "text-(--color-navy-dark)" : "text-white"
                }`}
              >
                Hola {firstName}!
              </span>
              <button
                onClick={() => (window.location.href = "/admin")}
                className="flex items-center gap-2 bg-(--color-blue-main) text-white px-3 py-1.5 rounded-sm hover:bg-(--color-navy-dark) transition-all text-xs uppercase tracking-wider font-bold shadow-sm"
              >
                <LayoutDashboard size={14} /> Admin Panel
              </button>
              <button
                onClick={() => logout()}
                className="p-2 rounded-full hover:bg-(--color-red-pale)/30 text-(--color-red-main) transition-all"
                title="Cerrar Sesión"
              >
                <LogOut size={20} />
              </button>
            </div>
          ) : null}
        </div>

        <div className="md:hidden text-white">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`transition-colors duration-300 ${
              useDarkContent ? "text-(--color-blue-main)" : "text-white"
            }`}
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay Full Screen */}
      <div
        className={`fixed inset-0 z-40 
          bg-(--bg-primary)/95 backdrop-blur-md shadow-lg py-3
          flex flex-col justify-center items-center 
          transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
            isMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-full pointer-events-none"
          }`}
      >
        <div className="flex flex-col items-center space-y-4 pt-10">
          <NavLink
            href="#"
            label="Propiedades"
            mobile
            darkText={useDarkContent}
            onClick={() => setIsMenuOpen(false)}
          />
          <NavLink
            href="#"
            label="Desarrollos"
            mobile
            darkText={useDarkContent}
            onClick={() => setIsMenuOpen(false)}
          />
          <NavLink
            href="#"
            label="Nosotros"
            mobile
            darkText={useDarkContent}
            onClick={() => setIsMenuOpen(false)}
          />

          <div className="w-20 h-0.5 bg-(--mobile-separator) my-8"></div>

          <div className="flex items-center gap-8">
            <ThemeSwitch theme={theme} toggleTheme={toggleTheme} mobile />
            <div className="flex gap-6 text-(--social-icon-color)">
              <Instagram
                size={28}
                className="hover:scale-110 transition-transform cursor-pointer"
              />
              <Facebook
                size={28}
                className="hover:scale-110 transition-transform cursor-pointer"
              />
            </div>
          </div>

          {user && (
            <div className="mt-8 flex flex-col gap-4 w-64">
              <span className="text-center text-lg font-medium text-(--social-icon-color)">
                Hola {firstName}!
              </span>
              <button
                onClick={() => (window.location.href = "/admin")}
                className="flex items-center justify-center gap-2 bg-(--color-blue-main) text-white px-6 py-4 rounded-sm uppercase tracking-wider font-bold text-xs shadow-lg"
              >
                <LayoutDashboard size={16} /> Admin Panel
              </button>
              <button
                onClick={() => logout()}
                className="flex items-center justify-center gap-2 border border-(--color-red-main) text-(--color-red-main) px-6 py-4 rounded-sm uppercase tracking-wider font-bold text-xs hover:bg-(--color-red-pale)/30"
              >
                <LogOut size={16} /> Cerrar Sesión
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
