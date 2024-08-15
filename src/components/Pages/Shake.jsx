import React from "react";
import Cards from "./Un-CustomizeCard/cards";
const ShakesData = [
  {
    id: 19,
    name: "Mango Shake",
    image: "/img/shakes/mango.jpeg",
    description:
      "Indulge in the ultimate mango indulgence with our Mango Shake, enhanced with luxurious ice cream and a sprinkle of premium dry fruits. Our mango shake is crafted from the finest ripe mangoes, blended to perfection to achieve a smooth and creamy texture that tantalizes your taste buds with each sip. ",
    price: 60,
    mrp: "90",
  },
  {
    id: 20,
    name: "Banana Shake",
    image: "/img/shakes/banana.png",
    description:
      "Indulge in pure bliss with our Banana Bliss Shake, elevated to new heights with the addition of creamy ice cream and wholesome dry fruits. Each sip is a symphony of flavors, as the natural sweetness of ripe bananas mingles with the velvety richness of ice cream, creating a luxurious texture that melts in your mouth. ",
    price: 60,
    mrp: "80",
  },
  {
    id: 21,
    name: "Papaya Shake",
    image: "/img/shakes/papaya.png",
    description:
      "Indulge in a luxurious blend of tropical flavors with our Papaya Shake Delight, enhanced with creamy ice cream and a sprinkle of tantalizing dry fruits. Immerse yourself in the velvety smoothness of ripe papaya, expertly blended to perfection for a refreshing treat. ",
    price: 60,
    mrp: "80",
  },
  {
    id: 22,
    name: "Strawberry Shake",
    image: "/img/shakes/strawberry.png",
    description:
      "Quench your thirst with our luscious Strawberry Shake. Made with plump, juicy strawberries blended to perfection with creamy milk.",
    price: 60,
    mrp: "120",
  },
  {
    id: 23,
    name: "Oreo Shake",
    image: "/img/shakes/oreo.png",
    description:
      "Each sip is a heavenly fusion of chocolatey Oreo goodness and the smoothness of milk, creating a decadent treat for your taste buds.",
    price: 60,
    mrp: "120",
  },
  {
    id: 24,
    name: "Vanilla Shake",
    image: "/img/shakes/vanilla.jpeg",
    description:
      " Each sip is a celebration of the sweet and comforting essence of vanilla, offering a perfect balance of creaminess and flavor.",
    price: 60,
    mrp: "120",
  },
  {
    id: 25,
    name: "Butter Scotch Shake",
    image: "/img/shakes/butter.jpeg",
    description:
      "Treat yourself to the decadent delight of our Butterscotch Shake. A heavenly blend of creamy milk and luscious butterscotch syrup.",
    price: 60,
    mrp: "120",
  },
  {
    id: 27,
    name: "Cold Coffee",
    image: "/img/shakes/coffee.jpeg",
    description:
      "Savor the luxurious combination of rich, velvety cold coffee infused with the decadent creaminess of ice cream, crowned with a medley of crunchy dry fruits. Our Cold Coffee with Ice Cream and Dry Fruits Indulgence is a symphony of indulgent flavors and textures that will elevate your coffee experience to new heights. ",
    price: 60,
    mrp: "100",
  },
];
const renderCards = (data) => {
  return data.map((item) => <Cards key={item.id} {...item} />);
};
const Shake = () => {
  return (
    <>
      <h2 id="shake" style={{ textAlign: "center", marginTop: "6rem" }}>
        Thick Shakes wth icecream
      </h2>
      {renderCards(ShakesData)}
    </>
  );
};

export default Shake;
