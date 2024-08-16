import React from 'react';
import Cards from '../Un-CustomizeCard/cards';

const BurgerData = [
  { id: 1, name: 'Aloo Tikki Burger', image: '/img/burger/aloo-tikki-burger.png', description: 'A perfect harmony of spiced potato patties with zesty sauces, sandwiched between soft burger buns. ', price: 30, mrp: '60' },
  { id: 2, name: 'Veg Cheese Burger', image: '/img/burger/cheese-burger.png', description: 'Satisfy your cravings with our Veg Cheese Burger, a delicious symphony of flavors and textures. ', price: 40, mrp: '80' },
];
const renderCards = (data) => {
  return data.map((item) => <Cards key={item.id} {...item} />);
};
const Burger = () => {
  
  return (
    <>
      <h2 id='burger' style={{textAlign: 'center' , marginTop: '7rem'}}>Delicious Burger</h2>
      {renderCards(BurgerData)}
    </>
  );
};

export default Burger;
