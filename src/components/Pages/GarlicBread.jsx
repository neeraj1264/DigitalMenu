import React from 'react';
import Cards from './Un-CustomizeCard/cards';

const GarlicBreadData = [
  { id: 42, name: 'Plain Garlic Bread', image: '/img/gb.jpg', description: 'Savor the simplicity of our Plain Garlic Bread – a classic and irresistible delight. ', price: 80, mrp: '100' },
  { id: 43, name: 'Cheese Corn Garlic Bread', image: '/img/gb.jpg', description: 'Indulge in the perfect harmony of flavors with our Cheese Corn Garlic Bread. ', price: 100, mrp: '130' },
  { id: 44, name: 'Stuff Garlic Bread', image: '/img/gb.jpg', description: 'Delight your senses with our Stuffed Garlic Bread, a mouthwatering twist on a classic favorite.', price: 110, mrp: '140' },
];
const renderCards = (data) => {
  return data.map((item) => <Cards key={item.id} {...item} />);
};
const GarlicBread = () => {
  
  return (
    <>
      <h2 id='garlic' style={{textAlign: 'center' , marginTop: '6rem'}}>Delicious Garlic Bread</h2>
      {renderCards(GarlicBreadData)}
    </>
  );
};

export default GarlicBread;
