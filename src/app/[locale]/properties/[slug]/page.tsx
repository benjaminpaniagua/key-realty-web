import { propertiesData } from "@/data/Properties";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "@/i18n/navigation";

interface Props {
  params: Promise<{
    slug: string;
    locale?: string;
  }>;
}

export default async function PropertyDetailPage({ params }: Props) {
  const { slug, locale } = await params;
  const property = propertiesData.find((p) => p.key === slug);

  if (!property) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-navy mb-4">Propiedad no encontrada</h1>
        <Link href="/properties" locale={locale} className="text-blue-600 hover:underline flex items-center gap-2">
          <FaArrowLeft /> Volver a propiedades
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-off-white">
    <div className="min-h-screen max-w-[1440px] mx-auto">
      
<Link 
        href="/properties" 
        className="flex items-center gap-2 text-navy hover:text-gray-dark font-semibold mb-6 pt-8"
      >
        <FaArrowLeft /> Volver
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 mt-12">
        
        <div className="relative h-96 md:h-full rounded-xl overflow-hidden">
          <Image
            src={property.mainImage}
            alt={property.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold text-navy mb-4">{property.name}</h1>
            <p className="text-gray-dark text-lg mb-6">{property.location}</p>
            <p className="text-navy text-2xl font-bold mb-6">${property.price.toLocaleString()}</p>
            <p className="text-gray-dark text-base mb-8">{property.description}</p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-navy/10 p-4 rounded-lg">
                <p className="text-gray-dark text-sm">Habitaciones</p>
                <p className="text-navy font-bold text-2xl">{property.numberOfRooms}</p>
              </div>
              <div className="bg-navy/10 p-4 rounded-lg">
                <p className="text-gray-dark text-sm">Baños</p>
                <p className="text-navy font-bold text-2xl">{property.numberOfBathrooms}</p>
              </div>
              <div className="bg-navy/10 p-4 rounded-lg">
                <p className="text-gray-dark text-sm">Terreno (m²)</p>
                <p className="text-navy font-bold text-2xl">{property.terrain}</p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-navy font-semibold mb-3">Características</h3>
              <div className="flex flex-wrap gap-2">
                {property.qualities.map((quality) => (
                  <span key={quality} className="bg-navy/20 text-navy px-3 py-1 rounded-full text-sm">
                    {quality}
                  </span>
                ))}
              </div>
            </div>

            <button className="bg-navy text-off-white font-semibold py-3 px-8 rounded-lg hover:bg-navy/80 transition">
              Contactar
            </button>
          </div>
        </div>
      </div>

      {property.images.length > 1 && (
        <div className="px-8 mb-12">
          <h2 className="text-2xl font-bold text-navy mb-6">Más fotos</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {property.images.map((image, index) => (
              <div key={index} className="relative h-40 rounded-lg overflow-hidden">
                <Image
                  src={image}
                  alt={`${property.name} - ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
    </div>
  );
}