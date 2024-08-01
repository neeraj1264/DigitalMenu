import React from 'react';
import CakeCard from './Cakepage';

const Data = [
  { id: 32, name: 'Chocolate cake',     image: '/img/cakes/choco.jpg', description: 'Chocolate Flavour Cake [2 Pound ]',     size: {size1: '2Pound', size2: '3pound', size3: '4pound', size4: '5pound'},price: {cake1: 240, cake2: 360, cake3: 480, cake4: 600}, mrp: '320' },
  { id: 35, name: 'PineApple cake',     image: '/img/cakes/pineapple.jpg', description: 'Pineapple Flavour Cake [2 Pound ] ',size: {size1: '2Pound', size2: '3pound', size3: '4pound', size4: '5pound'},price: {cake1: 240, cake2: 360, cake3: 480, cake4: 600}, mrp: '320' },
  { id: 36, name: 'Strawberry cake',    image: '/img/cakes/straww.jpg', description: 'Strawberry Flavour Cake [2 Pound ] ',  size: {size1: '2Pound', size2: '3pound', size3: '4pound', size4: '5pound'},price: {cake1: 240, cake2: 360, cake3: 480, cake4: 600}, mrp: '320' },
  { id: 38, name: 'Heart cake',         image: '/img/cakes/heart.jpg', description: 'Heart Shape Cake [3 Pound ] ',          size: {size1: '3Pound', size2: '4pound', size3: '5pound', size4: '6pound'},price: {cake1: 360, cake2: 480, cake3: 600, cake4: 720}, mrp: '450' },
  { id: 33, name: 'Vanilla cake',       image: '/img/cakes/vanilla.jpg', description: 'Vanilla Flavour Cake [2 Pound ]',     size: {size1: '2Pound', size2: '3pound', size3: '4pound', size4: '5pound'},price: {cake1: 240, cake2: 360, cake3: 480, cake4: 600}, mrp: '320' },
  { id: 34, name: 'Butter Scotch cake', image: '/img/cakes/butter.png', description: 'Butter Scotch Flavour Cake [2 Pound ]',size: {size1: '2Pound', size2: '3pound', size3: '4pound', size4: '5pound'},price: {cake1: 240, cake2: 360, cake3: 480, cake4: 600}, mrp: '320' },
];
const renderCards = (data) => {
  return data.map((item) => <CakeCard key={item.id} {...item} />);
};
const Cakes = () => {
  
  return (
    <>
      <h2 id='cakes' style={{textAlign: 'center' , marginTop: '6rem'}}>Delicious Cakes</h2>
      {renderCards(Data)}
    </>
  );
};

export default Cakes;
