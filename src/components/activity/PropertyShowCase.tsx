"use client";

import { forwardRef } from "react";
import CardProperties from "../ui/properties/CardProperties";
import { propertiesData } from "@/data/Properties";
import { FaArrowRight } from "react-icons/fa6";
import Link from 'next/link';

const PropertyShowCase = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section ref={ref} className="p-4">
      <div className="flex justify-between mb-12 md:items-center items-start flex-col md:flex-row gap-4">
        <div className="flex flex-col gap-2">
          <h2 className="text-navy text-4xl font-semibold">
            Find Your Dream Property
          </h2>
          <p className="text-gray-dark text-base">
            Trusted real estate solutions tailored to your lifestyle and
            investment needs.
          </p>
        </div>

        <Link
          href="/properties"
          className="text-navy font-semibold text-sm flex items-center gap-2 group"
        >
          See All Properties
          <FaArrowRight className="transition-transform duration-300 group-hover:rotate-0 -rotate-45 hover:underline" />
        </Link>
      </div>

      <div
        className="
        grid 
        grid-cols-1 
        sm:grid-cols-1
        md:grid-cols-2
        lg:grid-cols-2
        xl:grid-cols-3
        2xl:grid-cols-4
        gap-x-8 
        gap-y-12
        items-center
      "
      >
        {propertiesData.map((property) => (
          <CardProperties key={property.key} property={property} />
        ))}
      </div>
    </section>
  );
});

PropertyShowCase.displayName = "PropertyShowCase";

export default PropertyShowCase;
