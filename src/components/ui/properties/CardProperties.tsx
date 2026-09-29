"use client";

import { useState, useMemo } from "react";
import { Property } from "@/types/Property";
import Image from "next/image";
import Link from "next/link";
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
    <Link
      href={`/properties/${property.key}`}
      className="block"
    >
      <div className="relative w-full md:w-96 overflow-hidden cursor-pointer">
        <div className="relative h-52 w-full group">
          <Image
            src={property.mainImage}
            alt={property.name}
            fill
            className="object-cover rounded-xl"
          />

          <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl z-10">
            <FaEye size={20} className="text-off-white" />
          </div>

          {/* Botón favorito NO debe navegar */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsFavorite(!isFavorite);
            }}
            className="absolute top-3 right-3 z-20 bg-navy/80 p-2 rounded-full hover:scale-110"
          >
            {isFavorite ? (
              <FaHeart size={16} className="text-red-500" />
            ) : (
              <FaRegHeart size={16} className="text-off-white" />
            )}
          </button>
        </div>

        <div className="flex justify-between items-center mt-2">
          <h3 className="text-navy font-semibold text-sm">
            {property.name}
          </h3>
          <span className="text-navy font-semibold text-sm">
            ${property.price}
          </span>
        </div>

        <p className="text-gray-dark text-xs mb-3">
          {property.location}
        </p>
      </div>
    </Link>
  );
}

export default CardProperties;
