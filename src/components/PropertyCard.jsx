export const PropertyCard = ({ property }) => {
    const { 
      id,
      title, 
      shortDescription, 
      price, 
      amenities, 
      images, 
      vrboLink 
    } = property;
  
    const handleClick = () => {
      document.getElementById(`property-${id}`).scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    };
  
    return (
      <div 
        onClick={handleClick}
        className="bg-white rounded-3xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300 border-2 border-pink-200"
      >
        <img 
          src={images[0].url} 
          alt={images[0].alt} 
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2 text-pink-600">{title}</h2>
          <p className="text-gray-600 mb-4">{shortDescription}</p>
          <p className="text-xl font-bold text-pink-500 mb-4">{price}</p>
          
          <h3 className="font-semibold mb-2 text-pink-600">Amenities:</h3>
          <ul className="mb-4">
            {amenities.slice(0, 4).map((amenity, index) => (
              <li key={index} className="flex items-center mb-1">
                <span className="text-pink-400 mr-2">★</span>
                {amenity}
              </li>
            ))}
          </ul>
          
          <a 
            href={vrboLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full bg-pink-500 text-white text-center py-2 rounded-full hover:bg-pink-600"
          >
            Book Now
          </a>
        </div>
      </div>
    );
  };