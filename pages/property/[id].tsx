import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import PropertyDetail from "@/components/property/PropertyDetail";
import { PropertyProps } from "@/interfaces";

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;

  const [property, setProperty] = useState<PropertyProps | null>(null);

  useEffect(() => {
    if (id && typeof id === "string") {
      const found = PROPERTYLISTINGSAMPLE.find((item) => item.id === id);
      setProperty(found ?? null);
    }
  }, [id]);

  if (!router.isReady) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  if (!property) {
    return <p className="text-center text-red-500 mt-10">Property not found</p>;
  }

  return (
    <div className="p-4">
      <PropertyDetail property={property} />
    </div>
  );
}
