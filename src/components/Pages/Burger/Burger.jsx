import React from 'react';
import Cards from '../Un-CustomizeCard/cards';

const BurgerData = [
  { id: 14, name: 'Aloo Tikki Burger', image: '/img/burger/aloo-tikki-burger.png', description: 'A perfect harmony of spiced potato patties with zesty sauces, sandwiched between soft burger buns. ', price: 45, mrp: '60' },
  { id: 15, name: 'Veg Cheese Burger', image: '/img/burger/cheese-burger.png', description: 'Satisfy your cravings with our Veg Cheese Burger, a delicious symphony of flavors and textures. ', price: 60, mrp: '80' },
  { id: 16, name: 'Hangover Burger', image: '/img/burger/hangover-burger.png', description: 'Introducing our Hangover Burger – the ultimate cure for your cravings!', price: 70, mrp: '95' },
];
const renderCards = (data) => {
  return data.map((item) => <Cards key={item.id} {...item} />);
};
const Burger = () => {
  
  return (
    <>
      <h2 id='burger' style={{textAlign: 'center' , marginTop: '6rem'}}>Delicious Burger</h2>
      {renderCards(BurgerData)}
    </>
  );
};

export default Burger;
