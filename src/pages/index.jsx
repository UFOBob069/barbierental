// pages/index.jsx
import { NextSeo } from 'next-seo';
import { Hero } from '../components/Hero';
import { PropertyCard } from '../components/PropertyCard';
import { PropertyDetails } from '../components/PropertyDetails';
import { FAQ } from '../components/FAQ';
import { properties } from '../data/properties';
import { faqs, areaInfo } from '../data/faqs';
import { IntroSection } from '../components/IntroSection';

export default function Home() {
  return (
    <>
      <NextSeo
        title="Luxury Beach Rentals | Barbie&apos;s Dream Vacation Homes"
        description="Discover our collection of pink paradise vacation rentals. Featuring luxury amenities, ocean views, and the perfect Barbie aesthetic for your dream getaway."
        canonical="https://barbiesbeachrentals.com"
        openGraph={{
          images: [
            {
              url: '/images/properties/dream-house-villa.jpg',
              width: 1200,
              height: 630,
              alt: 'Dream House Villa - Beachfront Property',
            },
          ],
        }}
      />
      <div className="bg-pink-50">
        <Hero />
        <IntroSection />
        <main className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {properties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          {properties.map(property => (
            <PropertyDetails key={property.id} property={property} />
          ))}

          <FAQ faqs={faqs} areaInfo={areaInfo} />
        </main>
      </div>
    </>
  );
}