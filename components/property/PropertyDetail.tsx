import { PropertyProps } from "@/interfaces/index";
import BookingSection from "./BookingSection";
import ReviewSection from "./ReviewSection";
import { useState } from "react";

const tabs = ["What we offer", "Reviews", "About host"];

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  const [selectedTab, setSelectedTab] = useState("What we offer");

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-4xl font-bold">{property.name}</h1>
      <div className="text-gray-600 mt-2">
        ⭐ {property.rating} · {property.address.city}, {property.address.country}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        <img src={property.image} alt="Main" className="col-span-2 h-96 w-full object-cover rounded-lg" />
        {property.images?.slice(0, 3).map((img, i) => (
          <img key={i} src={img} className="h-48 w-full object-cover rounded-lg" />
        ))}
      </div>

      {/* Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
        {/* Left: Tabs + Amenities + Reviews */}
        <div className="lg:col-span-2">
          {/* Tabs */}
          <div className="flex space-x-4 mb-4 border-b pb-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`text-lg ${selectedTab === tab ? "font-bold border-b-2 border-black" : "text-gray-500"}`}
                onClick={() => setSelectedTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {selectedTab === "What we offer" && (
            <div>
              <h2 className="text-2xl font-semibold mt-4">Amenities</h2>
              <ul className="grid grid-cols-2 gap-2 mt-2">
                {property.category.map((amenity, i) => (
                  <li key={i} className="bg-gray-100 p-2 rounded">{amenity}</li>
                ))}
              </ul>
            </div>
          )}

          {selectedTab === "Reviews" && <ReviewSection reviews={property.reviews} />}

          {selectedTab === "About host" && (
            <div className="mt-4">
              <h3 className="text-xl font-semibold">Host Info</h3>
              <p>{property.host?.bio || "No information available."}</p>
            </div>
          )}
        </div>

        {/* Right: Booking */}
        <div className="sticky top-24 h-fit">
          <BookingSection price={property.price} />
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
