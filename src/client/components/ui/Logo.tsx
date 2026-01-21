import { useTheme } from "../../context/ThemeContext";

export const Logo = ({ className = "w-32" }: { className?: string }) => {
  const { theme } = useTheme();

  const logoSrc =
    theme === "dark"
      ? "/BELLUM LOGO VERICAL BLANCO.png"
      : "/BELLUM LOGO VERTICAL NEGRO.png";

  return (
    <div className={`${className} relative overflow-hidden`}>
      <img
        key={theme} // La key fuerza a React a reiniciar la animación al cambiar el tema
        src={logoSrc}
        alt="Bellum Inmobiliaria"
        className="w-full h-full object-contain animate-chivisdivis"
      />
      <style>{`
        @keyframes chivisIn {
          0% { opacity: 0; transform: translateY(15px) scale(0.95); filter: blur(4px); }
          100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
        }
        .animate-chivisdivis {
          animation: chivisIn 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
      `}</style>
    </div>
  );
};
