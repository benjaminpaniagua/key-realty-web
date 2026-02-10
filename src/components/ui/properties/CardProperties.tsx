"use client";

import { useState, useMemo } from "react";
import { Property } from "@/types/Property";
import Image from "next/image";
import { FaRegHeart, FaHeart, FaEye } from "react-icons/fa";

interface CardPropertiesProps {
  property: Property;
}

function CardProperties({ property }: CardPropertiesProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  const confettiParticles = useMemo(() => {
    if (!isFavorite) return [];

    return [...Array(6)].map(() => ({
      x: Math.random() * 40 - 20,
      y: Math.random() * -40 - 20,
    }));
  }, [isFavorite]);

  return (
    <div className="relative w-full overflow-hidden cursor-pointer">
      <div className="relative h-40 w-full group">
        <Image
          src={property.mainImage}
          alt={property.name}
          width={248}
          height={152}
          className="object-cover rounded-xl w-full h-full"
        />
        <div
          className="
    absolute inset-0
    flex items-center justify-center
    bg-black/40
    opacity-0
    group-hover:opacity-100
    transition-opacity
    duration-300
    rounded-xl
    z-10
  "
        >
          <FaEye
            size={20}
            className="text-off-white scale-90 group-hover:scale-100 transition-transform duration-300"
          />
        </div>

        {isFavorite && (
          <div className="absolute top-4 right-4 pointer-events-none z-10">
            {confettiParticles.map((p, i) => (
              <span
                key={i}
                className="confetti bg-red-500"
                style={
                  {
                    "--x": `${p.x}px`,
                    "--y": `${p.y}px`,
                  } as React.CSSProperties
                }
              />
            ))}
          </div>
        )}

        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="
            absolute top-3 right-3 z-20
            bg-navy/80 
            p-2 
            rounded-full 
            transition-transform 
            duration-200
            hover:scale-110 
            active:scale-90
          "
        >
          {isFavorite ? (
            <FaHeart size={16} className="text-red-500 animate-in" />
          ) : (
            <FaRegHeart size={16} className="text-off-white" />
          )}
        </button>
      </div>

      <div className="flex justify-between items-center mt-2">
        <h3 className="text-navy font-semibold text-sm">{property.name}</h3>
        <span className="text-navy font-semibold text-sm">
          ${property.price}
        </span>
      </div>

      <p className="text-gray-dark text-xs mb-3">{property.location}</p>
    </div>
  );
}

export default CardProperties;
