import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
import { Link, NavLink } from 'react-router-dom';
import Header from '../Header/Header';
// import AboutUs from '../about/AboutUs';
import ContactForm from '../ContactUs/Contact';
const items = [
  { id: 1,  imageUrl: '/img/burger.jpg',      title: 'Delicious Burger',   target: 'Burger'   , description: 'Hot Pattie, fresh veggies, and savory sauces in a perfect bun.' },
  { id: 2,  imageUrl: '/img/pizza.jpg',       title: 'Hot Pizzas',         target: 'Pizza'    , description: 'Crispy crusts and gooey cheese meet a medley of mouth-watering toppings in every slice.' },
  { id: 3,  imageUrl: '/img/cheesepan.jpg',   title: 'Spicy Chinese',      target: 'Chinese'  , description: 'Zesty and aromatic Chinese dishes infused with bold spices.' },
  { id: 4,  imageUrl: '/img/cornsand.jpg',    title: 'Sweet Sandwiches',   target: 'Sandwich' , description: 'A delightful fusion of sweet and savory in every bite.' },
  { id: 5,  imageUrl: '/img/makhnipasta.jpg', title: 'Tasty Pasta',        target: 'Pasta'    , description: 'Irresistible pasta dishes coated in flavorful sauces for a satisfying experience.' },
  { id: 6,  imageUrl: '/img/dalmakhani.jpeg', title: 'Main Course',        target: 'Dinner'   , description: 'Hearty and comforting dishes that form the heart of a fulfilling meal.' },
  { id: 7,  imageUrl: '/img/butternaan.jpeg', title: 'Hot Naans',          target: 'Naan'     , description: 'Freshly baked naans offering warmth and a perfect complement to your favorite curry.' },
  { id: 9,  imageUrl: '/img/chaap1.jpg',      title: 'Chatpati Chaap',     target: 'Chaap'    , description: 'The perfect blend of spice and crunch in every bite of our chatpati chaap.' },
  { id: 10, imageUrl: '/img/shakes.jpg',      title: 'Delicious Shakes',   target: 'Shake'    , description: 'Rich and indulgent shakes crafted with the finest ingredients for pure delight.' },
  { id: 11, imageUrl: '/img/gb.jpg',          title: 'Garkic-Bread',       target: 'Garlic'   , description: 'The essence of Indian street food captured in a flavorful pav bhaji medley.' },
  { id: 12, imageUrl: '/img/momo.jpg',        title: 'Hot Momos',          target: 'Momos'    , description: 'Steaming hot momos filled with succulent meat or vegetables for a comforting treat.' },
  { id: 13, imageUrl: '/img/cakes/choco.jpg', title: 'Celebrations Cakes', target: 'Cakes'     , description: 'Decadent celebration cakes, crafted with love to sweeten every moment.' },
  { id: 14, imageUrl: '/img/bhalle.jpeg',     title: 'Chatpati Chaat',     target: 'Snacks'   , description: 'An explosion of flavors in our tangy and crisp street-style chaat.' },
];

const MyCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment the index to move to the next slide
      setIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000);

    return () => {
      // Clear the interval to prevent memory leaks
      clearInterval(intervalId);
    };
  }, []); // Empty dependency array ensures this effect runs once when the component mounts

  return (
    <>
\        <img className='shop' src='img\banner.jpeg'/>
    <Carousel activeIndex={index} onSelect={handleSelect} controls={false}>
    {items.map((item) => (
        <Carousel.Item key={item.id}>
            <div className="carousel-inner">

      <Link
       to={`/menu#${encodeURIComponent(item.target)}`}>
          <img className="d-block w-100" src={item.imageUrl} alt={item.title} />
          {/* <Carousel.Caption>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </Carousel.Caption> */}
          </Link>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
    <Header/>
{/* <AboutUs/> */}
<ContactForm/> 
    </>
  );
};

export default MyCarousel;
