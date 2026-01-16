import React from "react";
import CardProperties from "../ui/properties/CardProperties";
import { propertiesData } from '@/data/Properties'

function PropertyShowCase() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-navy text-5xl font-semibold">Find Your Dream Property</h2>
          <p className="text-gray-dark text-base">
            Trusted real estate solutions tailored to your lifestyle and
            investment needs.
          </p>
        </div>
        <h5 className="text-navy font-semibold text-base">See All Properties</h5>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 space-x-8 space-y-12 justify-items-center">
        {propertiesData.map((property) =>(
        <CardProperties key={property.key} property={property} />
      ))}
      </div>
    </div>
  );
}

export default PropertyShowCase;
