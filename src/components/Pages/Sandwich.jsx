import React from 'react';
import Cards from './Un-CustomizeCard/cards';
const SandwichData = [
  { id: 17, name: 'Veg Sandwich', image: '/img/sandwiches/vegsand.jpg', description: 'Experience a burst of freshness with our Veg Sandwich, a wholesome medley of garden-fresh vegetables nestled between soft slices of bread.', price: 70, mrp: '90' },
  { id: 18, name: 'Pasta Sandwich', image: '/img/sandwiches/pastasand.jpg', description: 'Introducing our Pasta Sandwich – a unique culinary fusion that combines the comfort of pasta with the convenience of a sandwich.', price: 75, mrp: '90' },
  { id: 19, name: 'Sweet Corn Sandwich', image: '/img/sandwiches/cornsand.jpg', description: 'Delight in the simplicity of our Corn Sandwich, where sweet and crunchy corn kernels take center stage between soft slices of bread.', price: 85, mrp: '110' },
  { id: 20, name: 'Paneer Sandwich', image: '/img/sandwiches/paneersand.jpg', description: ' Delight in the simplicity of our Corn Sandwich, where sweet and crunchy corn kernels take center stage between soft slices of bread.', price: 90, mrp: '120' },
];
const renderCards = (data) => {
  return data.map((item) => <Cards key={item.id} {...item} />);
};
const Sandwich = () => {
  
  return (
    <>
      <h2 id='sandwich' style={{textAlign: 'center' , marginTop: '6rem'}}>Delicious Sandwich</h2>
      {renderCards(SandwichData)}
    </>
  );
};

export default Sandwich;
