import Link from "next/link";
import { PropertyProps } from "@/interfaces";

interface PropertyCardProps {
  property: PropertyProps;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <Link href={`/property/${property.id}`}>
      <div className="cursor-pointer border rounded shadow-sm overflow-hidden hover:shadow-md transition bg-white">
        <img
          src={property.image}
          alt={property.name}
          className="h-48 w-full object-cover"
        />
        <div className="p-4">
          <h2 className="font-bold text-lg">{property.name}</h2>
          <p className="text-sm text-gray-500">
            {property.address.city}, {property.address.country}
          </p>
          <div className="mt-2 text-yellow-500">⭐ {property.rating}</div>
          <div className="mt-1 font-semibold">${property.price}/night</div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
