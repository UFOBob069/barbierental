// components/PropertyDetails.jsx
export const PropertyDetails = ({ property }) => {
    const { 
      id,
      title, 
      description, 
      petPolicy, 
      location, 
      images,
      rank,
      vrboLink,
      amenities,
      rating,
      reviews
    } = property;
  
    // Function to render stars
    const renderStars = (rating) => {
      const stars = [];
      const fullStars = Math.floor(rating);
      const hasHalfStar = rating % 1 >= 0.5;

      // Add full stars
      for (let i = 0; i < fullStars; i++) {
        stars.push(
          <span key={`full-${i}`} className="text-yellow-400">★</span>
        );
      }

      // Add half star if needed
      if (hasHalfStar) {
        stars.push(
          <span key="half" className="text-yellow-400">★</span>
        );
      }

      // Add empty stars
      const emptyStars = 5 - Math.ceil(rating);
      for (let i = 0; i < emptyStars; i++) {
        stars.push(
          <span key={`empty-${i}`} className="text-gray-300">★</span>
        );
      }

      return stars;
    };
  
    return (
      <div id={`property-${id}`} className="bg-white rounded-3xl shadow-lg p-8 mb-8 relative border-2 border-pink-200">
        {/* Enhanced Ranking Badge */}
        <div className="absolute -top-4 -left-4 bg-gradient-to-br from-pink-500 to-pink-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-[0_4px_12px_rgba(236,72,153,0.5)] z-20 transform hover:scale-105 transition-transform duration-200">
          <div className="text-center">
            <div className="text-[10px] font-medium uppercase tracking-wider opacity-90">Rank</div>
            <div className="text-2xl font-bold">{rank}</div>
          </div>
        </div>

        {/* Grid for image and details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Left Column - Image */}
          <div>
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={images[0].url} 
                alt={images[0].alt} 
                className="w-full"
              />
            </div>
          </div>
  
          {/* Right Column - Key Details */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-pink-600 pl-14">{title}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-pink-50 p-4 rounded-2xl border border-pink-200">
                <h3 className="text-lg font-semibold text-pink-600 mb-3">Pet Policy</h3>
                <div className="space-y-1">
                  {petPolicy.split('\n').map((line, index) => (
                    line.trim() && (
                      <p key={index} className="flex items-center text-gray-700">
                        <span className="text-pink-400 mr-2">★</span>
                        {line}
                      </p>
                    )
                  ))}
                </div>
              </div>
  
              <div className="bg-pink-50 p-4 rounded-2xl border border-pink-200">
                <h3 className="text-lg font-semibold text-pink-600 mb-3">Location</h3>
                <p className="font-medium text-gray-700 mb-2">{location.area}</p>
                <p className="text-gray-700 mb-2">Walk to beach: {location.walkToDogBeach}</p>
                <h4 className="font-semibold mb-2 text-pink-600">Nearby Attractions:</h4>
                <ul className="space-y-1">
                  {location.nearbyAttractions.map((attraction, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="text-pink-400 mr-2">★</span>
                      {attraction}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex items-center gap-6 mt-6">
              <a 
                href={vrboLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-pink-500 text-white text-center py-2 px-6 rounded-full hover:bg-pink-600 transition duration-300 font-semibold transform hover:scale-105"
              >
                Book Your Dream Stay
              </a>

              <div className="flex items-center gap-2">
                <div className="text-2xl">{renderStars(rating)}</div>
                <span className="text-gray-600">
                  {rating} ({reviews} reviews)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Description and Amenities */}
        <div className="border-t border-pink-200 pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h3 className="text-xl font-semibold text-pink-600 mb-4">Why You&apos;ll Love This Dream Property</h3>
              <div className="max-w-none prose">
                {description.split('\n').map((paragraph, index) => (
                  paragraph.trim() && (
                    <p key={index} className="text-gray-700 mb-4 text-lg leading-relaxed">
                      {paragraph}
                    </p>
                  )
                ))}
              </div>
            </div>

            <div className="bg-pink-50 p-6 rounded-2xl h-fit border border-pink-200">
              <h3 className="text-xl font-semibold text-pink-600 mb-4">Fabulous Amenities</h3>
              <ul className="space-y-2">
                {amenities.map((amenity, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="text-pink-400 mr-2">★</span>
                    {amenity}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };