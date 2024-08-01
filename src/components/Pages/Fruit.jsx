import React from 'react';
import CustomCard from './CustomCard';

const Data = [
  { id: 109, name: 'Papaya  ',                   image: '/img/fruit/popaya.jpeg',     size: {size1: '200 grams' , size2: '400 grams'}, price: {priceH: 40, priceF:  70}, mrp: '80', description: ' Embark on a journey to tropical bliss with our Papaya Paradise, a refreshing treat crafted from the finest ripe papaya. Each slice of juicy papaya is meticulously prepared and served in a box, ensuring freshness with every bite. Accompanied by our special blend of masala, every mouthful is a harmonious symphony of sweet and savory flavors that dance on your palate.'},
  { id: 111, name: 'Watermelon  ',               image: '/img/fruit/watermelon.jpeg', size: {size1: '200 grams' , size2: '400 grams'}, price: {priceH: 40, priceF:  70}, mrp: '80', description: 'Immerse yourself in the refreshing essence of summer with our Watermelon Wonder, a delightful blend of juicy watermelon chunks served in a convenient box. Each bite is a burst of cool, hydrating sweetness, reminiscent of lazy days by the poolside.'},
  { id: 112, name: 'Chiku  ',                    image: '/img/fruit/chiku.jpeg',      size: {size1: '200 grams' , size2: '400 grams'}, price: {priceH: 40, priceF:  70}, mrp: '80', description: 'Experience the delightful sweetness of chiku (sapodilla) with our Chiku Charm, a flavorful treat served in a convenient box. Each bite of our ripe chiku is a burst of creamy sweetness, tantalizing your taste buds with its unique flavor. '},
  { id: 113, name: 'Lean & Green Fruit Chaat  ', image: '/img/fruit/fruit.jpeg',      size: {size1: '250 grams' , size2: '500 grams'}, price: {priceH: 60, priceF: 110}, mrp:'100', description: 'PAPAYA - GRAPES - POMEGRANATE. this combination of fruits known for aiding in weight loss.'},
  { id: 114, name: 'Energy Boost Blend  ',       image: '/img/fruit/fruit.jpeg',      size: {size1: '250 grams' , size2: '500 grams'}, price: {priceH: 60, priceF: 110}, mrp:'100', description: 'BANANA - APPLE - GRAPES. this combination of fruits known for boost of energy and vitality.'},
  { id: 115, name: 'Digestive Delight Mix  ',    image: '/img/fruit/fruit.jpeg',      size: {size1: '250 grams' , size2: '500 grams'}, price: {priceH: 60, priceF: 110}, mrp:'100', description: 'CHIKU - PAPAYA - BANANA. this combination of fruits known for their digestive benefits.'},
  { id: 116, name: 'Immunity Power Pack  ',      image: '/img/fruit/fruit.jpeg',      size: {size1: '250 grams' , size2: '500 grams'}, price: {priceH: 60, priceF: 110}, mrp:'100', description: 'MANGO - GRAPES - POMEGRANATE. this combination of fruits rich in vitamins and antioxidants to boost immunity  '},
  { id: 118, name: 'Muscle Builder Mix  ',       image: '/img/fruit/fruit.jpeg',      size: {size1: '250 grams' , size2: '500 grams'}, price: {priceH: 60, priceF: 110}, mrp:'100', description: 'BANANA - MANGO - CHIKU. this combination of fruits high in protein and nutrients to support muscle growth and recovery. '},
 ];
const renderCards = (data) => {
  return data.map((item) => <CustomCard key={item.id} {...item} />);
};
const Fruit = () => {
  
  return (
    <>
      <h2 id='fruits' style={{textAlign: 'center' , marginTop: '6rem'}}>Fruit Chaat</h2>
      {renderCards(Data)}
    </>
  );
};

export default Fruit;
