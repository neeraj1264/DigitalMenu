import React from 'react';
import CustomCard from './CustomCard';

const ChineseData = [
  { id: 45, name: 'Veg Noodle',          size: {size1: 'Half' , size2: 'Full'}, image: '/img/chinese/Veg-Noodles.jpg', description: 'Savor the vibrant flavors of our Veg Noodles.', price: {priceH: '60' , priceF: '90'}, mrp: '110' },
  { id: 46, name: 'White Noodle',        size: {size1: 'Half' , size2: 'Full'}, image: '/img/chinese/whitenoodle.jpg', description: 'Experience the subtle elegance of our White Noodles, a delicate and comforting dish that puts simplicity at the forefront.', price: {priceH: '70', priceF: '100'}, mrp: '110' },
  { id: 47, name: 'Cheese Noodle',       size: {size1: 'Half' , size2: 'Full'}, image: '/img/chinese/whitenoodle.jpg', description: 'Indulge in the rich and savory goodness of our Cheese Noodles.', price: {priceH: 70, priceF: 100}, mrp: '140' },
  { id: 48, name: 'Hakka Noodle',        size: {size1: 'Half' , size2: 'Full'}, image: '/img/chinese/hakkanoodle.jpg', description: 'our Hakka Noodles offer a delightful balance of sweet, spicy, and umami notes.', price:{priceH: '80', priceF: '120'}, mrp: '150' },
  { id: 49, name: 'Singapoori Noodle',   size: {size1: 'Half' , size2: 'Full'}, image: '/img/chinese/singanoodle.jpg', description: 'Experience the unique and flavorful journey of our Singapore Noodles.', price:{priceH: '80', priceF: '120'}, mrp: '150' },
  { id: 50, name: 'Spring Roll',         size: {size1: 'Half' , size2: 'Full'}, image: '/img/chinese/springroll.jpg',  description: 'Delight in the crisp and flavorful experience of our Spring Rolls.', price:{priceH: '70' , priceF: '100'}, mrp: '120' },
  { id: 51, name: 'Dry Manchurian',      size: {size1: 'Half' , size2: 'Full'}, image: '/img/chinese/dryman.jpg'     , description: 'Savor the delectable taste of our Dry Manchurian, a popular Indo-Chinese dish that combines crispy, deep-fried vegetable or protein balls with a flavorful, tangy sauce. ', price: {priceH: 60 , priceF: 90}, mrp: '120' },
  { id: 52, name: 'Gravy Manchurian',    size: {size1: 'Half' , size2: 'Full'}, image: '/img/chinese/gravyman.jpg',    description: 'This popular Indo-Chinese dish features tender, deep-fried vegetable or protein balls immersed in a flavorful and savory gravy. ', price: {priceH: 70 , priceF: 100}, mrp: '140' },
  { id: 53, name: 'Pav Bhaji',           size: {size1: 'Half' , size2: 'Full'}, image: '/img/chinese/pavbhaji.jpg',    description: 'Savor the iconic street food experience with our Pav Bhaji, a popular Indian delight. A medley of mixed vegetables is simmered to perfection in a flavorful blend of spices, mashed, and then served with soft buttered pav (bread rolls). ', price: 90, mrp: '120' },
  { id: 54, name: 'Cheese Chilli',       size: {size1: 'Half' , size2: 'Full'}, image: '/img/chinese/cheesepan.jpg',   description: 'Experience the fiery and cheesy fusion of flavors with our Cheese Chilli.', price: 140, mrp: '190' },
  { id: 55, name: 'Honey Chilli Patato', size: {size1: 'Half' , size2: 'Full'}, image: '/img/chinese/honeychil.jpg',   description: 'This mouthwatering dish offers a harmonious balance of flavors, where the sweetness of honey meets the kick of chili, creating a satisfying and addictive taste. ', price: 130, mrp: '160' },
];
const renderCards = (data) => {
  return data.map((item) => <CustomCard key={item.id} {...item} />);
};
const Chinese = () => {
  
  return (
    <>
      <h2 id='chinese' style={{textAlign: 'center' , marginTop: '5rem'}}>Delicious Chinese</h2>
      {renderCards(ChineseData)}
    </>
  );
};

export default Chinese;
