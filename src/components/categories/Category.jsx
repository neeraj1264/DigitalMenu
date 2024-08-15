import React, { useEffect, useState } from "react";
import "./Category.css";
import { Link, useLocation } from "react-router-dom";

const categories = [
  { id: 16, name: "juice", image: "/img/juice/mix.jpeg" },
  { id: 5, name: "shake", image: "/img/shakes.jpg" },
  { id: 4, name: "mojito", image: "/img/mojito/mojito.jpeg" },
  { id: 2, name: "burger", image: "/img/burger.png" },
  { id: 3, name: "sandwich", image: "/img/cornsand.jpg" },
  { id: 13, name: "cakes", image: "/img/cakes/choco.jpg" },
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