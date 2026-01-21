import {
  MapPin,
  Maximize2,
  BedDouble,
  Bath,
  Car,
  ArrowRight,
} from "lucide-react";

interface PropertyCardProps {
  title: string;
  price: string;
  location: string;
  img: string;
  m2: string;
  beds: number;
  baths: number;
  parking: number;
}

export function PropertyCard({
  title,
  price,
  location,
  img,
  m2,
  beds,
  baths,
  parking,
}: PropertyCardProps) {
  return (
    <div className="group w-[380px] bg-white border border-gray-100 hover:border-[#ccd8e0] transition-all duration-500 shrink-0 shadow-sm hover:shadow-2xl">
      <div className="relative h-64 overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#003b63] px-4 py-1 text-[10px] font-bold tracking-widest uppercase shadow-sm">
          Exclusiva
        </div>
      </div>

      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <div className="max-w-[65%]">
            <h4
              className="text-xl text-[#003b63] mb-1 leading-tight truncate"
              style={{ fontFamily: "Bebas Neue, sans-serif" }}
            >
              {title}
            </h4>
            <div className="flex items-center text-gray-400 text-[9px] uppercase tracking-widest">
              <MapPin size={10} className="mr-1 flex-shrink-0" /> {location}
            </div>
          </div>
          <span className="text-lg font-bold text-[#003b63] tracking-tighter">
            {price}
          </span>
        </div>

        {/* DETALLES TÉCNICOS */}
        <div className="grid grid-cols-4 gap-1 border-y border-gray-50 py-4 my-6">
          <div className="flex flex-col items-center gap-1 border-r border-gray-50">
            <Maximize2 size={14} className="text-gray-300" />
            <span className="text-[10px] font-bold text-gray-500">{m2} m²</span>
          </div>
          <div className="flex flex-col items-center gap-1 border-r border-gray-50">
            <BedDouble size={14} className="text-gray-300" />
            <span className="text-[10px] font-bold text-gray-500">
              {beds} Hab.
            </span>
          </div>
          <div className="flex flex-col items-center gap-1 border-r border-gray-50">
            <Bath size={14} className="text-gray-300" />
            <span className="text-[10px] font-bold text-gray-500">
              {baths} B.
            </span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Car size={14} className="text-gray-300" />
            <span className="text-[10px] font-bold text-gray-500">
              {parking} E.
            </span>
          </div>
        </div>

        <button className="w-full flex justify-between items-center group/btn text-[#003b63] text-[10px] font-bold tracking-[0.2em] uppercase py-2 hover:translate-x-1 transition-transform">
          Consultar Detalles
          <div className="p-2 bg-gray-50 rounded-full group-hover/btn:bg-[#003b63] group-hover/btn:text-white transition-all">
            <ArrowRight size={14} />
          </div>
        </button>
      </div>
    </div>
  );
}
