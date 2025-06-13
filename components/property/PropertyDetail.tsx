import { PropertyProps } from "@/interfaces";
import BookingSection from "./BookingSection";
import ReviewSection from "./ReviewSection";
import { Button } from "@/components/ui/button";
import { Share2, Heart } from "lucide-react";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
        <div>
          <h1 className="text-3xl font-bold">{property.name}</h1>
          <p className="text-gray-600">
            ⭐ {property.rating} · {property.address.city}, {property.address.country}
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-1 text-sm">
            <Share2 size={16} /> Share
          </Button>
          <Button variant="outline" className="flex items-center gap-1 text-sm">
            <Heart size={16} /> Save
          </Button>
        </div>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-4 grid-rows-2 gap-2 rounded-lg overflow-hidden mb-6">
        <img
          src={property.image}
          alt="Main"
          className="col-span-2 row-span-2 w-full h-full object-cover rounded-l-xl"
        />
        {property.images.slice(0, 4).map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Property ${index}`}
            className="w-full h-full object-cover"
          />
        ))}
      </div>

      {/* Main content with Booking sidebar */}
      <div className="grid lg:grid-cols-3 gap-10">
        <div className="col-span-2 space-y-8">
          {/* Description */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">Overview</h2>
            <p className="text-gray-700 leading-relaxed">{property.description}</p>
          </div>

          {/* What this place offers */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">What this place offers</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {property.category.map((item, index) => (
                <span key={index} className="text-gray-700 flex items-center">
                  • {item}
                </span>
              ))}
            </div>
          </div>

          {/* Reviews */}
          <ReviewSection reviews={property.reviews} />
        </div>

        {/* Booking card */}
        <div className="sticky top-24 h-fit">
          <BookingSection price={property.price} />
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
