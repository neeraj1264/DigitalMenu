import React from "react";
import Cards from "../Un-CustomizeCard/cards";

const mojitoData = [
  {
    id: 28,
    name: "Classic Mojito",
    image: "/img/mojito/classic.jpeg",
    description:
    "This invigorating drink blends the zesty brightness of fresh lime with the cool, aromatic notes of mint, all balanced by a touch of sweetness and a splash of effervescence. Perfect for unwinding on a sunny day or adding a touch of sophistication to your evening.",
    price: 50,
    mrp: "80",
  },
  {
    id: 29,
    name: "Strawberry Mojito",
    image: "/img/mojito/strawberry.jpeg",
    description:
    "This delightful treat showcases the vibrant flavor of ripe strawberries, celebrated for their juicy sweetness and bright red color. Whether enjoyed as a cocktail, dessert, or refreshing smoothie, Strawberry Delight is a timeless favorite that promises a burst of fruity bliss in every bite or sip.",
    price: 60,
      mrp: "90",
  },
  {
    id: 30,
    name: "MidNight Mojito",
    image: "/img/mojito/black.jpeg",
    description:
    "a vibrant twist on the classic Mojito that introduces the deep, tangy flavor of blackcurrants. This refreshing concoction combines the zesty brightness of lime and the aromatic freshness of mint with the rich, fruity essence of blackcurrant, all topped off with a sparkling finish. Perfect for those looking to indulge in a sophisticated yet invigorating drink.",
    price: 60,
      mrp: "90",
  },
  {
    id: 31,
    name: "Golden Caramel Mojito",
    image: "/img/mojito/golden.jpeg",
    description:
  "Experience a delightful fusion of rich, buttery sweetness and refreshing mint with our Butterscotch Mojito. This innovative cocktail combines the classic elements of a Mojito—fresh lime and mint. Perfect for those seeking a refreshing drink with a touch of decadent sweetness.",
    price: 60,
      mrp: "90",
  },
];
const renderCards = (data) => {
  return data.map((item) => <Cards key={item.id} {...item} />);
};
const Pasta = () => {
  return (
    <>
      <h2 id="mojito" style={{ textAlign: "center", marginTop: "7rem" }}>
        Delicious Mojito
      </h2>
      {renderCards(mojitoData)}
    </>
  );
};

export default Pasta;
