import React from 'react';
import Cards from '../Un-CustomizeCard/cards';

const pastaData = [
  { id: 21, name: 'Red Sauce Pasta',   image: '/img/pasta/redpasta.jpg', description: 'Savor the robust flavors of our Red Sauce Pasta, where pasta is generously coated in a savory tomato-based sauce.', price: 110, mrp: '140' },
  { id: 22, name: 'White Sauce Pasta', image: '/img/pasta/whitepasta.jpg', description: 'Delight in the creamy indulgence of our White Sauce Pasta. creamy and delightful choice for any pasta enthusiast.', price: 120, mrp: '150' },
  { id: 23, name: 'Tandoori Pasta',    image: '/img/pasta/redpasta.jpg', description: 'Experience a flavorful twist with our Tandoori Sauce Pasta, where al dente pasta meets the bold and aromatic essence of tandoori spices.', price: 130, mrp: '170' },
  { id: 24, name: 'Makhani Pasta',     image: '/img/pasta/makhnipasta.jpg', description: 'Indulge in the rich and velvety experience of our Makhani Sauce Pasta', price: 130, mrp: '165' },
  { id: 25, name: 'Mix Sauce Pasta',   image: '/img/pasta/mixpasta.jpg', description: 'Introducing our Mix Sauce Pasta, a delightful fusion that brings together the best of both red and white sauces.', price: 140, mrp: '180' },
];
const renderCards = (data) => {
  return data.map((item) => <Cards key={item.id} {...item} />);
};
const Pasta = () => {
  
  return (
    <>
       <h2 id='pasta' style={{textAlign: 'center' , marginTop: '6rem'}}>Delicious Pasta</h2>
       {renderCards(pastaData)}
    </>
  );
};

export default Pasta;
