export function Footer() {
  return (
    <footer className="bg-white py-20 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        <div>
          <h2
            className="text-3xl font-bold tracking-[0.2em] text-[#003b63] mb-6"
            style={{ fontFamily: "Bebas Neue, sans-serif" }}
          >
            BELLUM
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Inmobiliaria de lujo líder en la zona metropolitana de Guadalajara,
            Jalisco. Elevamos el estándar de la asesoría inmobiliaria
            residencial.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <h4 className="font-bold text-[#003b63] mb-6 uppercase text-xs tracking-[0.3em]">
            Redes Sociales
          </h4>
          <div className="flex gap-8 text-gray-400">
            <a href="#" className="hover:text-[#003b63] transition-colors">
              Instagram
            </a>
            <a href="#" className="hover:text-[#003b63] transition-colors">
              Facebook
            </a>
            <a href="#" className="hover:text-[#003b63] transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
        <div className="md:text-right">
          <h4 className="font-bold text-[#003b63] mb-6 uppercase text-xs tracking-[0.3em]">
            Oficina Central
          </h4>
          <p className="text-gray-500 text-sm mb-2 italic">
            Puerta de Hierro, Zapopan
          </p>
          <p className="text-gray-500 text-sm">+52 33 1234 5678</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-20 pt-8 border-t border-gray-50 text-center">
        <p className="text-gray-400 text-[10px] tracking-widest uppercase">
          © 2024 Bellum Inmobiliaria • Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
