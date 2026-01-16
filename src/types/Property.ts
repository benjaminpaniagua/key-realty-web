type propertyType = "apartments" | "villas" | "Terrains" | "Penthouses" | "Studios" | "Houses";
export type qualityType = "garage" | "garden" | "pool" | "fireplace" | "air conditioning" | "furnished" | "balcony" | "terrace" | "sea view" | "mountain view" | "city view" | "gym" | "elevator";
export type qualitiesType = qualityType[];


export interface Property {
    key: string;
    name: string;
    description: string;
    location: string;
    price: number;
    terrain: number;
    numberOfRooms: number;
    numberOfBathrooms: number;
    numberOfBethrooms: number;
    mainImage: string;
    images: string[];
    typeOfProperty: propertyType;
    qualities: qualitiesType;

}

export type Properties = Property[];
