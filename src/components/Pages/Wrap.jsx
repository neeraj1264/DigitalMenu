import React from 'react';
import Cards from './Un-CustomizeCard/cards';

const WrapData = [
  { id: 56, name: 'Aloo Tikki Wrap', image: '/img/wrap/aloowrap.jpeg', description: 'The Aloo Tikki provides a satisfying crunch, complemented by the crispness of vegetables and the burst of flavors from our signature sauces.', price: 90, mrp: '120' },
  { id: 57, name: 'Paneer Tikki Wrap', image: '/img/wrap/paneerwrap.jpeg', description: ' This delectable creation features spiced and grilled paneer (Indian cottage cheese) patties, perfectly wrapped in a warm tortilla along with fresh veggies and flavorful sauces.', price: 110, mrp: '150' },
  { id: 58, name: 'Special Wrap', image: '/img/wrap/splwrap.jpeg', description: 'Every bite promises a delightful amalgamation of savory, spicy, and zesty notes, creating a satisfying and memorable experience.', price: 120, mrp: '170' },
  { id: 59, name: 'Paneer Parcel', image: '/img/wrap/paneerparcel.jpeg', description: 'Experience the joy of unwrapping a delicious surprise with our Mix Veg Parcel.', price: 70, mrp: '100' },
  { id: 60, name: 'Mix Veg Parcel', image: '/img/wrap/Mixparcel.jpeg', description: 'Indulge in the delectable richness of our Paneer Parcel, a culinary delight that wraps spiced and succulent paneer (Indian cottage cheese) in a golden-brown.', price: 70, mrp: '100' },
];
const renderCards = (data) => {
  return data.map((item) => <Cards key={item.id} {...item} />);
};
const Wrap = () => {
  
  return (
    <>
      <h2 id='wrap' style={{textAlign: 'center' , marginTop: '6rem'}}>Delicious Wrap</h2>
      {renderCards(WrapData)}
    </>
  );
};

export default Wrap;
