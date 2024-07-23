import React from 'react';
import CustomCard from './CustomCard';

const MomosData = [
  { id: 63, size: {size1: 'Half' , size2: 'Full'}, name: 'Veg Momo', image: '/img/momos/momo.jpg', description: 'our Veg Steamed Momos offer a light and satisfying texture. Served with a tangy dipping sauce and Mayo', price: {priceH:'50' , priceF: '80'}, mrp: '100' },
  { id: 64, size: {size1: 'Half' , size2: 'Full'}, name: 'Fried Momo', image: '/img/momos/friedmomo.jpg', description: 'Experience the irresistible crunch of our Fried Momos, a delectable twist on the traditional Tibetan dumplings.', price: {priceH:'50' , priceF: '80'}, mrp: '100' },
  { id: 65, size: {size1: 'Half' , size2: 'Full'}, name: 'Kurkure Momo', image: '/img/momos/kfcmomos.jpeg', description: 'Make this crunchy and juicy, vegetable and soya mix, lightly seasoned, coated and breaded with cornflakes deep fried until golden brown .', price: 100, mrp: '120' },
];
const renderCards = (data) => {
  return data.map((item) => <CustomCard key={item.id} {...item} />);
};
const Momos = () => {
  
  return (
    <>
      <h2 id='momos' style={{textAlign: 'center' , marginTop: '5rem'}}>Delicious Momos</h2>
      {renderCards(MomosData)}
    </>
  );
};

export default Momos;
