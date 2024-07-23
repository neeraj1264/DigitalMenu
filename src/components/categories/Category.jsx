import React, { useEffect, useState } from "react";
import "./Category.css";
import { Link, useLocation } from "react-router-dom";

const categories = [
  // { id: 15, name: "fruits", image: "/img/fruit/fruit.jpeg" },
  { id: 2, name: "burger", image: "/img/burger.png" },
  { id: 3, name: "sandwich", image: "/img/cornsand.jpg" },
  { id: 1, name: "pizza", image: "/img/pizza.png" },
  { id: 4, name: "pasta", image: "/img/pasta.png" },
  { id: 16, name: "juice", image: "/img/juice/mix.jpeg" },
  { id: 5, name: "shake", image: "/img/shakes.jpg" },
  { id: 13, name: "cakes", image: "/img/cakes/choco.jpg" },
  { id: 6, name: "garlic", image: "/img/gb.jpg" },
  { id: 7, name: "chinese", image: "/img/cheesepan.jpg" },
  { id: 8, name: "wrap", image: "/img/aloowrap.jpeg" },
  { id: 9, name: "snacks", image: "/img/bhalle.jpeg" },
  { id: 10, name: "momos", image: "/img/momo.jpg" },
  { id: 11, name: "chaap", image: "/img/chaap1.jpg" },
  { id: 12, name: "dinner", image: "/img/dalmakhani.jpeg" },
  { id: 14, name: "naan", image: "/img/butternaan.jpeg" },
];

function Category() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.substring(1);
    if (hash) {
      scrollToSection(hash);
    }
  }, [location]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      const offset =
        section.offsetTop -
        parseFloat(getComputedStyle(section).marginTop);
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="outer-card">
      {categories.map((category) => (
        <Link
          to={`#${encodeURIComponent(category.name)}`}
          key={category.id}
          onClick={() => scrollToSection(category.name)}
        >
          <div className="card">
            <img
              src={category.image}
              className="card-img-top"
              alt={category.name}
            />
            <div className="card-body">
              <p className="card-text">{category.name}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Category;