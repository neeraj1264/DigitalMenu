import React from "react";
// import Cards from './Un-CustomizeCard/cards';
import CustomCard from "./CustomCard";
const SandwichData = [
  {
    id: 28,
    name: "Cold Sandwich",
    image: "/img/sandwiches/coldSandwich.jpeg",
    description:
      "Our Cold Veg Sandwich is a fresh, light, and nutritious option perfect for any time of day. Crafted with care, this sandwich features a hearty layer of crisp, garden-fresh vegetables nestled between slices of soft, artisanal bread. Each bite delivers a delightful crunch and a burst of flavor, with a harmonious blend of textures and tastes.",
    price: { priceH: "20", priceF: "40" },
    mrp: "40",
    size: { size1: "Half", size2: "Full" },
  },
  {
    id: 15,
    name: "Veg Sandwich",
    image: "/img/sandwiches/vegsand.jpg",
    description:
      "Experience a burst of freshness with our Veg Sandwich, a wholesome medley of garden-fresh vegetables nestled between soft slices of bread.",
    price: { priceH: "30", priceF: "50" },
    mrp: "60",
    size: { size1: "Half", size2: "Full" },
  },
  {
    id: 16,
    name: "Pasta Sandwich",
    image: "/img/sandwiches/pastasand.jpg",
    description:
      "Introducing our Pasta Sandwich – a unique culinary fusion that combines the comfort of pasta with the convenience of a sandwich.",
    price: { priceH: "35", priceF: "60" },
    mrp: "70",
    size: { size1: "Half", size2: "Full" },
  },
  {
    id: 17,
    name: "Sweet Corn Sandwich",
    image: "/img/sandwiches/cornsand.jpg",
    description:
      "Delight in the simplicity of our Corn Sandwich, where sweet and crunchy corn kernels take center stage between soft slices of bread.",
    price: { priceH: "35", priceF: "60" },
    mrp: "70",
    size: { size1: "Half", size2: "Full" },
  },
  {
    id: 18,
    name: "Paneer Sandwich",
    image: "/img/sandwiches/paneersand.jpg",
    description:
      " Delight in the simplicity of our Corn Sandwich, where sweet and crunchy corn kernels take center stage between soft slices of bread.",
    price: { priceH: "40", priceF: "70" },
    mrp: "80",
    size: { size1: "Half", size2: "Full" },
  },
];
const renderCards = (data) => {
  return data.map((item) => <CustomCard key={item.id} {...item} />);
};
const Sandwich = () => {
  return (
    <>
      <h2 id="sandwich" style={{ textAlign: "center", marginTop: "7rem" }}>
        Delicious Sandwich
      </h2>
      {renderCards(SandwichData)}
    </>
  );
};

export default Sandwich;
