import { useRouter } from "next/router";
import { PROPERTYLISTINGSAMPLE } from "@/constants/index";
import PropertyDetail from "@/components/property/PropertyDetail";

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;

  const property = PROPERTYLISTINGSAMPLE.find(
    (item) => item.id.toString() === id
  );

  if (!property) return <p>Property not found</p>;

  return (
    <div className="p-4">
      <PropertyDetail property={property} />
    </div>
  );
}
