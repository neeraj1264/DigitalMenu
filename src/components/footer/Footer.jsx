import React, { useState , useEffect } from "react";
import "./Footer.css";
import { NavLink, useLocation } from "react-router-dom";
// import { FaShoppingBasket } from 'react-icons/fa';
import { FaCartPlus } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
// import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { GiSlicedBread } from "react-icons/gi";
import { MdRestaurantMenu } from "react-icons/md";
import Badge from "react-bootstrap/Badge";
import "bootstrap/dist/css/bootstrap.min.css";
import { useCart } from "../../ContextApi";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function Footer() {
  const { cartItemsCount } = useCart();
  const [isBumping, setIsBumping] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();

  const handleGroceryClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  // Don't render the footer if the current path is /cart
  if (location.pathname === "/cart") {
    return null;
  }
  useEffect(() => {
    if (cartItemsCount > 0) {
      setIsBumping(true);
      const timer = setTimeout(() => {
        setIsBumping(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [cartItemsCount]);
  return (
    <>
      <footer>
        <div className="footer-content">
          {/* <NavLink to="/" className="nav-link i" activeclassname="active">
            <IoHomeOutline className="icon" />
            <span className="icon-name">Home</span>
          </NavLink>

          <NavLink to="/menu" className="nav-link i" activeclassname="active">
            <MdRestaurantMenu className="icon" />
            <span className="icon-name">Menu</span>
          </NavLink> */}
          {cartItemsCount > 0 && (
            <NavLink
              to="/cart"
              className={`nav-link pad i ${isBumping ? "bump" : ""}`}
              activeclassname="active"
            >
              <div className="cart">
                <FaCartPlus className="icon" />
                <Badge bg="danger" className=" cartno">
                  {cartItemsCount}
                </Badge>
              </div>
              {/* <span className="icon-name">Cart</span> */}
            </NavLink>
          )}

          {/* <div className="" onClick={handleGroceryClick}>
            <GiSlicedBread className="G-icon" />
            <div className="G-name">Grocery </div>
          </div> */}
        </div>
      </footer>

      {/* Modal for Grocery */}
      {/* <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Coming Soon</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Grocery Item Coming Soon. Stay tuned!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" style={{background: '#d32e2e', border: 'none'}} onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal> */}
    </>
  );
}

export default Footer;
