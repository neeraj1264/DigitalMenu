import React from 'react';
import CustomCard from './CustomCard';

const Data = [
  { id: 89, size: {size1: 'Half' , size2: 'Full'}, name: 'Plain Naan',   image: '/img/dinner/plainnaan.jpeg',   description: 'Plain naan is a traditional Indian flatbread that is soft, fluffy, and typically served as an accompaniment to various curries, gravies, and other main dishes.', price: 25, mrp: '30' },
  { id: 90, size: {size1: 'Half' , size2: 'Full'}, name: 'Butter Naan',  image: '/img/dinner/butternaan.jpeg',  description: 'Butter naan is a delectable Indian flatbread known for its soft and fluffy texture, enriched with the indulgent flavor of butter.', price: 30, mrp: '40' },
  { id: 91, size: {size1: 'Half' , size2: 'Full'}, name: 'Stuff Naan',   image: '/img/dinner/stuffnaan.jpeg',   description: 'Stuffed naan is often brushed with butter or ghee after cooking, enhancing its flavor and providing a rich finish.', price: 40, mrp: '50' },
  { id: 92, size: {size1: 'Half' , size2: 'Full'}, name: 'Onion Naan',   image: '/img/dinner/onionnaan.jpeg',   description: 'Onion naan is often served warm and may be brushed with butter or ghee after cooking, enhancing its richness.', price: 40, mrp: '50' },
  { id: 93, size: {size1: 'Half' , size2: 'Full'}, name: 'Paneer Naan',  image: '/img/dinner/paneernaan.jpeg',  description: 'Paneer naan is a scrumptious Indian flatbread that incorporates paneer (Indian cottage cheese) into the dough, creating a delightful and flavorful variation.', price: 50, mrp: '60' },
  { id: 94, size: {size1: 'Half' , size2: 'Full'}, name: 'Garlic Naan',  image: '/img/dinner/garlicnaan.jpeg',  description: 'Garlic naan is a popular and aromatic variation of traditional Indian flatbread that is infused with the distinct flavor of garlic. ', price: 50, mrp: '60' },
  { id: 95, size: {size1: 'Half' , size2: 'Full'}, name: 'Tandoori Roti',image: '/img/dinner/tandooriroti.jpeg',description: 'Tandoori roti is a popular Indian flatbread that is cooked in a tandoor, which is a traditional clay oven.', price: 12, mrp: '15' },
  { id: 96, size: {size1: 'Half' , size2: 'Full'}, name: 'Tawa Roti',    image: '/img/dinner/tawaroti.jpeg',    description: 'Tawa roti is a type of Indian flatbread that is cooked on a tawa, which is a flat or concave griddle. ', price: 12, mrp: '15' },
  { id: 97, size: {size1: 'Half' , size2: 'Full'}, name: 'Missi Roti',   image: '/img/dinner/misiroti.jpeg',    description: 'Missi Roti is a traditional and flavorful Indian flatbread made from a mixture of whole wheat flour (atta) and gram flour (besan).', price: 20, mrp: '22' },
  { id: 98, size: {size1: 'Half' , size2: 'Full'}, name: 'Ajwain Roti',  image: '/img/dinner/ajwainroti.jpeg',  description: 'Ajwain Roti is an Indian flatbread that is flavored with ajwain seeds (carom seeds), adding a distinct and aromatic flavor to the bread.', price: 15, mrp: '20' },
  { id: 99, size: {size1: 'Half' , size2: 'Full'}, name: 'Plain Rice',   image: '/img/dinner/plainrice.jpeg',   description: 'Plain rice is a simple and versatile staple food that is a dietary foundation in many cultures around the world.', price: {priceH: '40', priceF: '60'}, mrp: '60' },
  { id: 100, size: {size1: 'Half' , size2: 'Full'}, name: 'Jeera Rice',  image: '/img/dinner/jeerarice.jpeg',   description: 'Jeera rice is a flavorful and aromatic Indian rice dish that is infused with the distinct taste of cumin seeds (jeera).', price: '70', mrp: '100' },
  { id: 107, size: {size1: 'Half' , size2: 'Full'}, name: 'Fried Rice',  image: '/img/dinner/friedrice.jpeg',   description: 'Fried rice can be customized with different vegetables, proteins, and seasonings, making it a flexible and delicious option.', price: 130, mrp: '160' },
];
const renderCards = (data) => {
  return data.map((item) => <CustomCard key={item.id} {...item} />);
};
const Naan = () => {
  
  return (
    <>
      <h2 id='naan' style={{textAlign: 'center' , marginTop: '5rem'}}>Hot Naan</h2>
      {renderCards(Data)}
    </>
  );
};

export default Naan;
