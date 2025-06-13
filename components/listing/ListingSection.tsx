// components/listing/ListingSection.tsx
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import PropertyCard from "@/components/common/PropertyCard"; // 👈 import the new component

const ListingSection = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
    {PROPERTYLISTINGSAMPLE.map((prop, i) => (
      <PropertyCard key={i} property={prop} />
    ))}
  </div>
);

export default ListingSection;
