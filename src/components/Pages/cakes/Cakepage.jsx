import React, { useEffect, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import "../../Pages/Pizza/Pizza.css";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useCart } from "../../../ContextApi";
const CakeCard = ({ id, name, description, price, image, mrp, size }) => {
  const { cake1, cake2, cake3, cake4 } = price;
  const { size1, size2, size3, size4 } = size;

  const {
    decrementCart,
    incrementCart,
    AddToCart,
    showButtons,
    setShowButtons,
    setCartItems,
    updateCartItemQuantity,
  } = useCart();

  const [showFullDescription, setShowFullDescription] = useState(false);
  const toggleDescription = () => setShowFullDescription(!showFullDescription);

  const [show, setShow] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(size1);
  const [selectedSizePrice, setSelectedSizePrice] = useState(cake1);
  const productShowButtons = showButtons[id] || false;

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setSelectedSize("");
    setShow(false);
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    } else {
      setShowButtons(false);
      decrementCart();
    }
  };

  const handleAddToCart = () => {
    if (selectedSize === "") {
      // Handle the case where no size is selected
      alert("Please select a size.");
      return;
    }

    const product = {
      id,
      name: `${name} [${selectedSize}]`,
      price: selectedSizePrice,
      quantity,
      image,
    };
    AddToCart(product);
    setShowButtons((prevShowButtons) => ({ ...prevShowButtons, [id]: true }));
    incrementCart();
    setSelectedSize("");
    setShow(false);
  };

  const handleAddBtnToCart = () => {
    const product = {
      id,
      name,
      price,
      quantity,
      image,
    };
    AddToCart(product);
    setShowButtons((prevShowButtons) => ({ ...prevShowButtons, [id]: true }));
    incrementCart();
    setQuantity(quantity);
  };

  const handleAddBtnClick = () => {
    // If hascakeOptions is false, trigger handleAddToCart functionality
    if (!hascakeOptions) {
      handleAddBtnToCart();
    } else {
      // Otherwise, show the modal
      handleShow();
    }
  };

  const handleRemoveToCart = () => {
    decrementCart();
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    updateCartItemQuantity(id, 0);
    setShowButtons((prevShowButtons) => ({ ...prevShowButtons, [id]: false }));
    localStorage.removeItem(`${id}_quantity`);
  };

  const handlecakeSizeChange = (event) => {
    const newSize = event.target.value;

    // Update the selected size and its corresponding price
    setSelectedSize(newSize);
    switch (newSize) {
      case size1:
        setSelectedSizePrice(cake1);
        break;
      case size2:
        setSelectedSizePrice(cake2);
        break;
      case size3:
        setSelectedSizePrice(cake3);
        break;
      case size4:
        setSelectedSizePrice(cake4);
        break;

      default:
        // Handle the case where an unknown size is selected
        console.error("Unknown size selected.");
        return;
    }
  };
  useEffect(() => {
    // Retrieve quantity from local storage on component mount
    const storedQuantity = localStorage.getItem(`${id}_quantity`);
    if (storedQuantity) {
      setQuantity(parseInt(storedQuantity, 10));
      setShowButtons((prevShowButtons) => ({ ...prevShowButtons, [id]: true }));
    }
  }, [id]);

  const hascakeOptions =
    typeof price === "object" &&
    "cake1" in price &&
    "cake2" in price &&
    "cake3" in price &&
    "cake4" in price;

  const getTotalPrice = () => {
    let total = selectedSizePrice * quantity;
    return total;
  };

  return (
    <>
      <hr />
      <div className="product-card">
        <div className="product-details">
          <h3 className="product-name">{name}</h3>
          <p style={{ fontWeight: "700" }}>
            ₹{cake1 || price}
            <span
              style={{
                textDecoration: "line-through",
                marginLeft: ".5rem",
                color: "grey",
              }}
            >
              {mrp}
            </span>
            {!hascakeOptions && (
              <span
                style={{
                  marginLeft: ".5rem",
                  color: "var(--bg)",
                }}
              >
                {(((mrp - price) / mrp) * 100).toFixed(0)}% off
              </span>
            )}
            {hascakeOptions && (
              <span
                style={{
                  marginLeft: ".5rem",
                  color: "var(--bg)",
                }}
              >
                {(((mrp - cake1 || price) / mrp) * 100).toFixed(0)}% off
              </span>
            )}
          </p>
          <p className="description" onClick={toggleDescription}>
            {showFullDescription ? (
              description
            ) : (
              <>
                {description.length > 40
                  ? description.substring(0, 40) + "..."
                  : description }
                {description.length > 40 && (
                  <span style={{ color: "black", fontWeight: 500 }}>
                    {" "}
                    read more
                  </span>
                )}
              </>
            )}
          </p>{" "}
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
                  boxShadow: "1px 0px 3px 3px white"
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
                onClick={handleAddBtnClick}
              >
                ADD
              </button>
            )}

            {hascakeOptions && (
              <Modal
                className="modeldialog"
                show={show}
                onHide={handleClose}
                style={{
                  position: "fixed",
                  bottom: "2px",
                  background: "white",
                }}
              >
                <Modal.Header closeButton className="modalheader">
                  <img
                    src={image}
                    alt={name}
                    style={{
                      maxWidth: "5rem",
                      height: "4rem",
                      margin: "0 10px 10px 0",
                      borderRadius: "1rem",
                    }}
                  />
                  <Modal.Title>{name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <h3 style={{ textAlign: "center" }}>Select Size</h3>

                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Size</th>
                        <th>Price</th>
                        <th>Choose</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{size1}</td>
                        <td>₹{cake1}</td>
                        <td>
                          <input
                            type="radio"
                            value={size1}
                            checked={selectedSize === size1}
                            onChange={handlecakeSizeChange}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>{size2}</td>
                        <td>₹{cake2}</td>
                        <td>
                          <input
                            type="radio"
                            value={size2}
                            checked={selectedSize === size2}
                            onChange={handlecakeSizeChange}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>{size3}</td>
                        <td>₹{cake3}</td>
                        <td>
                          <input
                            type="radio"
                            value={size3}
                            checked={selectedSize === size3}
                            onChange={handlecakeSizeChange}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>{size4}</td>
                        <td>₹{cake4}</td>
                        <td>
                          <input
                            type="radio"
                            value={size4}
                            checked={selectedSize === size4}
                            onChange={handlecakeSizeChange}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Modal.Body>
                <Modal.Footer className="modalfooter">
                  <div className="quantity-update">
                    <Button
                      variant="contained"
                      style={{ color: "var(--bg)" }}
                      onClick={handleDecrement}
                    >
                      <FaMinus />
                    </Button>
                    <span style={{ margin: "0 0.5rem", color: "black" }}>
                      {quantity}
                    </span>
                    <Button
                      variant="contained"
                      style={{ color: "var(--bg)" }}
                      onClick={handleIncrement}
                    >
                      <FaPlus />
                    </Button>
                  </div>
                  <Button className="addtocart" onClick={handleAddToCart}>
                    Add to Cart
                    <span style={{ paddingLeft: ".3rem", fontWeight: "800" }}>
                      ₹{getTotalPrice()}
                    </span>
                  </Button>
                </Modal.Footer>
              </Modal>
            )}
          </div>
          {hascakeOptions && <div className="cust">customisable</div>}
        </div>
      </div>
    </>
  );
};

export default CakeCard;
