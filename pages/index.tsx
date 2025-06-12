import React from 'react';
import Card from '@/components/common/Card';
import Button from '@/components/common/Button';

//milestone 1
import FilterSection from "@/components/filters/FilterSection";
import ListingSection from "@/components/listing/ListingSection";

// Optional: You can define the Hero inline or extract it as a component
const Hero = () => (
  <section
    className="bg-cover bg-center text-white text-center py-20 px-4"
    style={{ backgroundImage: `url('/assets/house-placeholder.jpg')` }}
  >
    <h1 className="text-4xl font-bold">Find your favorite place here!</h1>
    <p className="mt-4 text-lg">The best prices for over 2 million properties worldwide.</p>
  </section>
);

export default function Home() {
  return (
    <>
      <Hero />
      <FilterSection />
      <ListingSection />
      {/* <div className="p-8">
        <Card
          title="Beautiful Apartment"
          image="/assets/house-placeholder.jpg"
          description="A lovely place to stay in the city center."
        />
        <div className="mt-4">
          <Button label="Book Now" onClick={() => alert('Booking...')} />
        </div>
      </div> */}
    </>
  );
}
