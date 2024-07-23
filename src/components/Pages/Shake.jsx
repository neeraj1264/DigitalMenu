import React from 'react';
import Cards from './Un-CustomizeCard/cards';
const ShakesData = [
  { id:125, name: 'Mango Shake with Ice Cream',  image: '/img/shakes/mango.jpeg', description: 'Indulge in the ultimate mango indulgence with our Mango Shake, enhanced with luxurious ice cream and a sprinkle of premium dry fruits. Our mango shake is crafted from the finest ripe mangoes, blended to perfection to achieve a smooth and creamy texture that tantalizes your taste buds with each sip. ', price: 70, mrp: '90' },
  { id:126, name: 'Banana Shake with Ice Cream', image: '/img/shakes/banana.png', description: 'Indulge in pure bliss with our Banana Bliss Shake, elevated to new heights with the addition of creamy ice cream and wholesome dry fruits. Each sip is a symphony of flavors, as the natural sweetness of ripe bananas mingles with the velvety richness of ice cream, creating a luxurious texture that melts in your mouth. ', price: 60, mrp: '80' },
  { id:127, name: 'Papaya Shake with Ice Cream', image: '/img/shakes/papaya.png', description: 'Indulge in a luxurious blend of tropical flavors with our Papaya Shake Delight, enhanced with creamy ice cream and a sprinkle of tantalizing dry fruits. Immerse yourself in the velvety smoothness of ripe papaya, expertly blended to perfection for a refreshing treat. ', price: 60, mrp: '80' },
  { id: 26, name: 'Strawberry Shake',            image: '/img/shakes/strawberry.png', description: 'Quench your thirst with our luscious Strawberry Shake. Made with plump, juicy strawberries blended to perfection with creamy milk.', price: 90, mrp: '120' },
  { id: 27, name: 'Oreo Shake',                  image: '/img/shakes/oreo.png', description: 'Each sip is a heavenly fusion of chocolatey Oreo goodness and the smoothness of milk, creating a decadent treat for your taste buds.', price: 90, mrp: '120' },
  { id: 28, name: 'Vanilla Shake',               image: '/img/shakes/vanilla.jpeg', description: ' Each sip is a celebration of the sweet and comforting essence of vanilla, offering a perfect balance of creaminess and flavor.', price: 90, mrp: '120' },
  { id: 29, name: 'Butter Scotch Shake',         image: '/img/shakes/butter.jpeg', description: 'Treat yourself to the decadent delight of our Butterscotch Shake. A heavenly blend of creamy milk and luscious butterscotch syrup.', price: 100, mrp: '120' },
  { id: 30, name: 'Chocolate Shake',             image: '/img/shakes/choco.jpg', description: 'Dive into the irresistible decadence of our Chocolate Shake. A velvety fusion of rich chocolate syrup and creamy milk.', price: 90, mrp: '120' },
  { id: 31, name: 'Cold Coffee with Ice Cream',  image: '/img/shakes/coffee.jpeg', description: 'Savor the luxurious combination of rich, velvety cold coffee infused with the decadent creaminess of ice cream, crowned with a medley of crunchy dry fruits. Our Cold Coffee with Ice Cream and Dry Fruits Indulgence is a symphony of indulgent flavors and textures that will elevate your coffee experience to new heights. ', price: 80, mrp: '100' },
];
const renderCards = (data) => {
  return data.map((item) => <Cards key={item.id} {...item} />);
};
const Shake = () => {
  
  return (
    <>
      <h2 id='shake' style={{textAlign: 'center' , marginTop: '5rem'}}>Delicious Shakes</h2>
      {renderCards(ShakesData)}
    </>
  );
};

export default Shake;
