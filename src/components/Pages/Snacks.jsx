import React from 'react';
import Cards from './Un-CustomizeCard/cards';

const SnacksData = [
  { id: 61, name: 'Kulche Chole', image: '/img/chaat/kulche.jpeg', description: 'featuring two soft and fluffy kulchas served alongside a bowl of spiced and savory chole.', price: 45, mrp: '60' },
  { id: 62, name: 'Mix Pakode [250 gm]', image: '/img/chaat/pakore.jpeg', description: 'Savor the crispy goodness of our Mix Pakode, a delightful assortment of deep-fried fritters showcasing a mix of vegetables, gram flour, and aromatic spices. ', price: 60, mrp: '75' },
  { id: 63, name: 'Tikki Bhalle', image: '/img/chaat/bhalle.jpeg', description: 'Delight in the deliciousness of our Tikki Bhalle, a delightful combination of crisp aloo tikki (potato patties) and soft, soaked bhalle (fried lentil dumplings).', price: 70, mrp: '90' },
];
const renderCards = (data) => {
  return data.map((item) => <Cards key={item.id} {...item} />);
};
const Snacks = () => {
  
  return (
    <>
      <h2 id='snacks' style={{textAlign: 'center' , marginTop: '5rem'}}>Delicious Snacks</h2>
      {renderCards(SnacksData)}
    </>
  );
};

export default Snacks;
