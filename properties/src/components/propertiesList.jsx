import React, { useEffect, useState } from 'react';

const ListProperties = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // Fetch properties from the backend API
    const fetchProperties = async () => {
      try {
        const response = await fetch('http://localhost:3005/properties');
        const data = await response.json();
        setProperties(data);
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };
    console.log(fetchProperties)
    fetchProperties();
  }, []);

  return (
    <div>
      <h2>List of Properties</h2>
      {properties.map((property) => (
        <div key={property._id}>
          <h3>{property.title}</h3>
          <p>Description: {property.Description}</p>
          <p>Owner: {property.owner.name}</p>
          <p>Price: ${property.price}</p>
          <p>Area: {property.area} sq. ft.</p>
          <p>Bedrooms: {property.bedrooms}</p>
          <img src={property.image} alt={property.title} />
          <h4>Additional Images:</h4>
          <div>
            {property.images.map((image) => (
              <img key={image} src={image} alt="Property Image" />
            ))}
          </div>
          <p>Availability: {property.availability}</p>
          <p>Created At: {property.createdAt}</p>
        </div>
      ))}
    </div>
  );
};

export default ListProperties;
