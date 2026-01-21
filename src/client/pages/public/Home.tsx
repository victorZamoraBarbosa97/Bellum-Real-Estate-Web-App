import { Search, MapPin, ArrowRight, CheckCircle2 } from "lucide-react";
import { Navbar } from "../../components/layout/Navbar";
import { Footer } from "../../components/layout/Footer";
import { PropertyCard } from "../../features/catalog/components/PropertyCard";

// Datos mock para el slider (luego vendrán de tu API)
const PROPERTIES = [
  {
    id: 1,
    title: "Residencia Puerta de Hierro",
    price: "$18,500,000",
    location: "Zapopan, Jalisco",
    img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800",
    m2: "450",
    beds: 4,
    baths: 4.5,
    parking: 3,
  },
  {
    id: 2,
    title: "Loft Americana",
    price: "$4,200,000",
    location: "Colonia Americana, GDL",
    img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=800",
    m2: "110",
    beds: 1,
    baths: 1,
    parking: 1,
  },
  {
    id: 3,
    title: "Penthouse Valle Real",
    price: "$12,900,000",
    location: "Zapopan, GDL",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
    m2: "280",
    beds: 3,
    baths: 3.5,
    parking: 2,
  },
  {
    id: 4,
    title: "Mansión Colinas de San Javier",
    price: "$25,000,000",
    location: "Zapopan, GDL",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    m2: "620",
    beds: 5,
    baths: 6,
    parking: 4,
  },
  {
    id: 5,
    title: "Departamento Punto Sur",
    price: "$5,800,000",
    location: "Tlajomulco, GDL",
    img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800",
    m2: "145",
    beds: 2,
    baths: 2,
    parking: 2,
  },
];

export function Home() {
  return (
    <div className="min-h-screen bg-[#f0efeb] font-sans selection:bg-[#003b63] selection:text-white overflow-x-hidden">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000"
            alt="Fondo Inmobiliaria Bellum"
            className="w-full h-full object-cover scale-105 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full pt-20">
          <div className="max-w-2xl">
            <span
              className="text-white/80 uppercase tracking-[0.4em] text-sm mb-4 block"
              style={{ fontFamily: "HK Grotesk, sans-serif" }}
            >
              Exclusividad en Guadalajara, Jalisco
            </span>
            <h2
              className="text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-tight"
              style={{ fontFamily: "Bebas Neue, sans-serif" }}
            >
              ENCUENTRA TU <br />
              <span className="text-[#ccd8e0]">PRÓXIMO DESTINO</span>
            </h2>

            <div className="bg-white p-2 rounded-sm shadow-2xl flex flex-col md:flex-row items-center gap-2 max-w-3xl">
              <div className="flex-1 w-full flex items-center px-4 border-b md:border-b-0 md:border-r border-gray-100">
                <MapPin className="text-[#003b63] mr-3" size={20} />
                <input
                  type="text"
                  placeholder="¿En qué zona buscas?"
                  className="w-full py-4 focus:outline-none text-gray-700 font-medium"
                />
              </div>
              <button className="w-full md:w-auto bg-[#003b63] hover:bg-[#002c4a] text-white px-10 py-4 transition-all flex items-center justify-center gap-2 font-bold tracking-widest">
                <Search size={20} /> BUSCAR
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* INFINITE SLIDER SECTION */}
      <section className="py-24 bg-white overflow-hidden border-b border-gray-50">
        <div className="max-w-7xl mx-auto px-4 mb-12 flex flex-col md:flex-row justify-between items-end">
          <div>
            <h3
              className="text-4xl text-[#003b63] mb-2"
              style={{ fontFamily: "Bebas Neue, sans-serif" }}
            >
              Propiedades Destacadas
            </h3>
            <div className="w-20 h-1 bg-[#003b63] mb-4"></div>
            <p className="text-gray-500 max-w-md text-sm">
              Explora nuestra selección curada de residencias de lujo y
              oportunidades únicas en Jalisco.
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-[#003b63] font-bold text-xs tracking-widest uppercase hover:gap-4 transition-all border-b border-[#003b63] pb-1">
            VER TODO EL CATÁLOGO <ArrowRight size={16} />
          </button>
        </div>

        <div className="relative flex">
          <div className="flex gap-8 animate-marquee whitespace-nowrap py-6">
            {[...PROPERTIES, ...PROPERTIES].map((prop, idx) => (
              <PropertyCard key={`${prop.id}-${idx}`} {...prop} />
            ))}
          </div>
        </div>
      </section>

      {/* DEVELOPMENTS SECTION */}
      <section className="bg-[#001e32] py-32 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
          <div className="relative group">
            <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-[#ccd8e0] z-20"></div>
            <div className="relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000"
                className="relative z-10 w-full shadow-2xl grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                alt="Desarrollos Bellum"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#003b63] -z-0 opacity-50"></div>
          </div>

          <div>
            <h3
              className="text-5xl md:text-6xl mb-8 leading-tight"
              style={{ fontFamily: "Bebas Neue, sans-serif" }}
            >
              DESARROLLOS <br />{" "}
              <span className="text-[#ccd8e0]">VERTICALES GDL</span>
            </h3>
            <p className="text-gray-300 text-lg mb-10 leading-relaxed font-light">
              Especialistas en la comercialización de preventas exclusivas y
              proyectos de alta gama que redefinen el horizonte urbano de
              Guadalajara.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-[#ccd8e0]" size={20} />
                <span className="text-sm tracking-wide text-gray-200">
                  Ubicaciones Estratégicas
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-[#ccd8e0]" size={20} />
                <span className="text-sm tracking-wide text-gray-200">
                  Alta Plusvalía Garantizada
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-[#ccd8e0]" size={20} />
                <span className="text-sm tracking-wide text-gray-200">
                  Amenidades de Clase Mundial
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-[#ccd8e0]" size={20} />
                <span className="text-sm tracking-wide text-gray-200">
                  Asesoría Legal Integral
                </span>
              </div>
            </div>

            <button className="group flex items-center gap-4 bg-white text-[#001e32] px-10 py-4 font-bold tracking-widest hover:bg-[#ccd8e0] transition-all uppercase text-sm">
              MÁS INFORMACIÓN{" "}
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
