'use client'

import React from 'react'
import { Property } from '@/types/Property'
import Image from "next/image";

interface CardPropertiesProps {
  property: Property
}

function CardProperties({ property }: CardPropertiesProps) {
  return (
    <div className="text-navy m-0 p-0">
      <div className="relative w-full h-48 m-0">
        <Image
          src={property.mainImage}
          alt={property.name}
          className="object-cover rounded-3xl"
          width={300} height={158}
        />
      </div>

      <div className='flex justify-between items-center font-semibold mt-2 mb-1'>
        <h3 className='text-base'>{property.name}</h3>
        <div className='text-sm'>${property.price}</div>
      </div>

      <p className='text-gray-dark text-xs'>{property.location}</p>
      
    </div>
  )
}

export default CardProperties