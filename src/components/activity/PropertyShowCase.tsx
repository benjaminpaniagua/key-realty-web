"use client";

import { forwardRef } from "react";
import CardProperties from "../ui/properties/CardProperties";
import { propertiesData } from "@/data/Properties";
import { FaArrowRight } from "react-icons/fa6";

const PropertyShowCase = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section ref={ref} className="">
      <div className="flex justify-between mb-12 items-center">
        <div className="flex flex-col gap-2">
          <h2 className="text-navy text-4xl font-semibold">
            Find Your Dream Property
          </h2>
          <p className="text-gray-dark text-base">
            Trusted real estate solutions tailored to your lifestyle and
            investment needs.
          </p>
        </div>

        <button className="text-navy font-semibold text-sm flex items-center gap-2 group">
          See All Properties
          <FaArrowRight className="transition-transform duration-300 group-hover:rotate-0 -rotate-45 hover:underline" />
        </button>
      </div>

      <div
        className="
        grid 
        grid-cols-1 
        sm:grid-cols-2
        md:grid-cols-3
        xl:grid-cols-4
        2xl:grid-cols-5 
        gap-x-8 
        gap-y-12
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
