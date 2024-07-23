import React from 'react';
import CustomCard from './CustomCard';

const ChaapData = [
  { id: 66, name: 'Malai Chaap',  size: {size1: 'Half' , size2: 'Full'}, image: '/img/chaap/malaichap.jpg', description: 'our Malai Chaap is a delightful vegetarian option with a satisfying texture and an explosion of flavors.', price: {priceH: '90' , priceF: '140'}, mrp: '170' },
  { id: 67, name: 'Masala Chaap', size: {size1: 'Half' , size2: 'Full'}, image: '/img/chaap/masalachap.jpg', description: 'Masala Chaap is a savory and satisfying option for those looking to enjoy a delicious and vegetarian dish with a bold and spicy kick.', price: {priceH: '90' , priceF: '140'}, mrp: '170' },
  { id: 68, name: 'Afgani Chaap', size: {size1: 'Half' , size2: 'Full'}, image: '/img/chaap/afgani.jpg', description: 'Afghani Chaap offers a delightful experience for those seeking a delicious and vegetarian alternative with a touch of Afghan culinary flair.', price: {priceH: '90' , priceF: '140'}, mrp: '170' },
  { id: 69, name: 'Lemon Chaap',  size: {size1: 'Half' , size2: 'Full'}, image: '/img/chaap/afgani.jpg', description: '"Lemon Chaap" typically refers to a flavorful dish where soy chaap (made from soybean) is marinated and grilled with a zesty lemony twist. ', price: {priceH: '95' , priceF: '150'}, mrp: '170' },
  { id: 71, name: 'Paneer Tikka', size: {size1: 'Half' , size2: 'Full'}, image: '/img/chaap/paneertikka.jpg', description: 'Paneer Tikka is a popular Indian appetizer that features marinated and grilled chunks of paneer, which is Indian cottage cheese.', price: 160, mrp: '200' },
];
const renderCards = (data) => {
  return data.map((item) => <CustomCard key={item.id} {...item} />);
};
const Chaap = () => {
  
  return (
    <>
      <h2 id='chaap' style={{textAlign: 'center' , marginTop: '5rem'}}>Delicious Chaap</h2>
      {renderCards(ChaapData)}
    </>
  );
};

export default Chaap;
