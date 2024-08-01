import React from 'react';
import Cards from './Un-CustomizeCard/cards';

const Data = [
  { id: 119, name: 'Mosambi Juice',     image: '/img/juice/mosambi.jpeg',      description: 'A refreshing citrus delight made from sweet and tangy mosambi (sweet lime), packed with Vitamin C and antioxidants.', price: 60 , mrp: '90' },
  { id: 120, name: 'Pineapple Juice',   image: '/img/juice/pineapple.jpeg',     description: 'A tropical treat bursting with the sweet and tangy flavor of fresh pineapple, rich in Vitamin C and bromelain enzyme.',                               price: 60 , mrp: '90' },
  { id: 121, name: 'Grapes Juice',      image: '/img/juice/grapes.jpeg',  description: 'A classic choice, grape juice offers a sweet and slightly tart flavor, loaded with antioxidants and natural sugars.',                                              price: 60 , mrp: '90' },
  { id: 122, name: 'Watermelon Juice',  image: '/img/juice/watermelon.jpeg', description: ' Cool and hydrating, watermelon juice is perfect for hot summer days, offering a subtly sweet and refreshing flavor while being low in calories.',                                                   price: 50 , mrp: '80' },
  { id: 123, name: 'Pomegranate Juice', image: '/img/juice/anar.jpeg',      description: 'Known for its deep red color and sweet-tart taste, pomegranate juice is a powerhouse of antioxidants and essential nutrients.',                                                   price: 90 , mrp: '140' },
  { id: 124, name: 'Mix Fruit Juice',   image: '/img/juice/mix.jpeg',      description: 'Delight your taste buds with the zesty freshness of mosambi (sweet lime), perfectly complemented by the tropical sweetness of pineapple.',                                                   price: 60 , mrp: '90' },
];
const renderCards = (data) => {
  return data.map((item) => <Cards key={item.id} {...item} />);
};
const Juice = () => {
  
  return (
    <>
      <h2 id='juice' style={{textAlign: 'center' , marginTop: '6rem'}}>Fresh Juices</h2>
      {renderCards(Data)}
    </>
  );
};

export default Juice;
