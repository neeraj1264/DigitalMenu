import React, { useEffect, useState } from "react";
import { useCart } from "../../../ContextApi";

const Cards = ({ id, name, description, price, image, mrp }) => {
  const {
    decrementCart,
    incrementCart,
    AddToCart,
    showButtons,
    setShowButtons,
    cartItems,
    setCartItems,
    updateCartItemQuantity,
  } = useCart();

  const productInCart = cartItems.find((item) => item.id === id);
  const productShowButtons = showButtons[id] || false;
  const [quantity, setQuantity] = useState(1);

  //                                                     description functionality

  const [showFullDescription, setShowFullDescription] = useState(false);
  const toggleDescription = () => setShowFullDescription(!showFullDescription);

  const truncatedDescription =
    description.length > 100 ? description.substring(0, 100) : description;

  useEffect(() => {
    // Retrieve quantity from local storage on component mount
    const storedQuantity = localStorage.getItem(`${id}_quantity`);
    if (storedQuantity) {
      setQuantity(parseInt(storedQuantity, 10));
      setShowButtons((prevShowButtons) => ({ ...prevShowButtons, [id]: true }));
    }
  }, [id]);

  const handleAddToCart = () => {
    const product = {
      id,
      name,
      price,
      quantity,
      image,
      mrp,
    };
    AddToCart(product);
    setShowButtons((prevShowButtons) => ({ ...prevShowButtons, [id]: true }));
    incrementCart();
    setQuantity(quantity);
  };

  const handleRemoveToCart = () => {
    decrementCart();
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    updateCartItemQuantity(id, 0);
    setShowButtons((prevShowButtons) => ({ ...prevShowButtons, [id]: false }));
    localStorage.removeItem(`${id}_quantity`);
  };
  return (
    <>
      <hr className="hr" />
      <div className="product-card">
        <div className="product-details">
          <h5 className="product-name">{name}</h5>
          <p style={{ fontWeight: "700", marginBottom: ".5rem" }}>
            ₹{price}
            <span
              style={{
                textDecoration: "line-through",
                marginLeft: ".5rem",
                color: "grey",
              }}
            >
              {mrp}
            </span>
            <span
              style={{
                marginLeft: ".5rem",
                color: "var(--bg)",
              }}
            >
              {(((mrp - price) / mrp) * 100).toFixed(0)}% off
            </span>
          </p>
          <p className="description" onClick={toggleDescription}>
            {showFullDescription ? (
              description
            ) : (
              <>
                {description.length > 50
                  ? description.substring(0, 20) + "..."
                  : description}
                {description.length > 50 && (
                  <span style={{ color: "black", fontWeight: 500 }}>
                    {" "}
                    read more
                  </span>
                )}
              </>
            )}
          </p>
        </div>
        <div className="add-to-cart">
          <div>
            <img src={image} alt="Product" />
          </div>
          <div className="add-btn">
            {productShowButtons && (
              <button
                variant="contained"
                style={{
                  color: "whitesmoke",
                  border: "none",
                  background: "#d32e2e",
                  borderRadius: ".5rem",
                  padding: ".2rem .5rem",
                  fontSize: ".8rem",
                }}
                onClick={handleRemoveToCart}
              >
                Added
              </button>
            )}
            {!productShowButtons && (
              <button
                variant="contained"
                className="btn"
                onClick={handleAddToCart}
              >
                ADD
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
