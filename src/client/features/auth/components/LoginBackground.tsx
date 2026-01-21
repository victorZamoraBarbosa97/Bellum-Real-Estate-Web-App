export const LoginBackground = () => {
  return (
    <>
      <style>{`
        /* --- MODO CLARO --- */
        .login-bg-grid {
          background-image: radial-gradient(circle at 50% 0%, var(--color-white) 0%, var(--color-off-white) 75%);
        }
        .login-bg-grid::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: linear-gradient(rgba(0, 30, 50, 0.05) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0, 30, 50, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
          pointer-events: none;
        }

        /* --- MODO OSCURO --- */
        .dark .login-bg-grid {
          background-image: radial-gradient(circle at 50% 0%, var(--color-navy-dark) 0%, #000000 75%);
        }
        .dark .login-bg-grid::before {
          background-image: linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
        }
      `}</style>
      <div className="absolute inset-0 z-0 login-bg-grid transition-all duration-300" />
    </>
  );
};
