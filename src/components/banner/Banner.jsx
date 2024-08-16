import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
import { Link, NavLink } from 'react-router-dom';
import Header from '../Header/Header';
// import AboutUs from '../about/AboutUs';
import ContactForm from '../ContactUs/Contact';
import { FaWhatsapp } from "react-icons/fa";

const items = [
  { id: 2,  imageUrl: '/img/juice/mosambi.jpeg',title: 'Fresh Juice',        target: 'juice'    , description: "A refreshing citrus delight mademade from sweet and tangy mosambi (sweet lime), packed with Vitamin C and antioxidants.",},
  { id: 10, imageUrl: '/img/shakes.jpg',        title: 'Delicious Shakes',   target: 'shake'    , description: 'Rich and indulgent shakes crafted with the finest ingredients for pure delight.' },
  { id: 14, imageUrl:'/img/mojito/classic.jpeg',title: 'Classic Mojito',     target: 'mojito'   , description: "This delightful treat showcases the vibrant flavor of ripe strawberries, celebrated for their juicy sweetness and bright red color. Whether enjoyed as a cocktail, dessert, or refreshing smoothie, Strawberry Delight is a timeless favorite that promises a burst of fruity bliss in every bite or sip.",},
  { id: 1,  imageUrl: '/img/burger.jpg',        title: 'Delicious Burger',   target: 'burger'   , description: 'Hot Pattie, fresh veggies, and savory sauces in a perfect bun.' },
  { id: 4,  imageUrl: '/img/cornsand.jpg',      title: 'Sweet Sandwiches',   target: 'sandwich' , description: 'A delightful fusion of sweet and savory in every bite.' },
  { id: 13, imageUrl: '/img/cakes/choco.jpg',   title: 'Celebrations Cakes', target: 'cakes'     , description: 'Decadent celebration cakes, crafted with love to sweeten every moment.' },
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

  const handlePlaceOrder = () => {
    const whatsappNumber = "+917015823645";
    const message = `Hello! I'm interested in placing an order. Could you please provide me with more information about your menu options and delivery timings? Thanks!`;

    const whatsappLink =
      "https://api.whatsapp.com/send?phone=" +
      encodeURIComponent(whatsappNumber) +
      "&text=" +
      encodeURIComponent(message);

    console.log("WhatsApp link:", whatsappLink);

    // Open WhatsApp chat in a new window
    window.open(whatsappLink, "_blank");
  };

  return (
    <>
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
     <img className='shop' src='img\banner.jpeg'/>
     <FaWhatsapp className='whatsapp-button' onClick={() => handlePlaceOrder()}/>

{/* <AboutUs/> */}
<ContactForm/> 
    </>
  );
};

export default MyCarousel;
