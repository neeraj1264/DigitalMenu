import React, { useEffect, useState } from "react";
import { Button, Modal, Table, Form } from "react-bootstrap";
import { useCart } from "../../../ContextApi";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./Pizza.css";

const PizzaPage = ({ id, name, description, price, image, mrp, size }) => {
  const { size1, size2, size3 } = size || {};
  const { priceR, priceM, priceL } = price;

  const {
    decrementCart,
    incrementCart,
    AddToCart,
    showButtons,
    setShowButtons,
    setCartItems,
    updateCartItemQuantity,
  } = useCart();

  const [show, setShow] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(size1);
  const [selectedSizePrice, setSelectedSizePrice] = useState(priceR);
  const [AddonsPrice, setAddonsPrice] = useState(30);
  const [cheesePrice, setcheesePrice] = useState(40);
  const productShowButtons = showButtons[id] || false;
  const [addons, setAddons] = useState({
    extraCheese: false,
    cheeseburst: false,
    onion: false,
    capsicum: false,
    tomato: false,
    sweetcorn: false,
    mushroom: false,
  });

  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setSelectedSize("");
    setSelectedSizePrice(priceR);
    setShow(false);
  };

  const handleAddBtnClick = () => {
    // If hasPriceOptions is false, trigger handleAddToCart functionality
    if (!hasPriceOptions) {
      handleAddBtnToCart();
    } else {
      // Otherwise, show the modal
      handleShow();
    }
  };
  const handleAddonChange = (addon) => {
    setAddons((prevAddons) => ({
      ...prevAddons,
      [addon]: !prevAddons[addon],
    }));
  };

  const addonsList = [
    { name: "onion ", key: "onion" },
    { name: "capsicum", key: "capsicum" },
    { name: "tomato", key: "tomato" },
    { name: "sweetcorn", key: "sweetcorn" },
    { name: "mushroom", key: "mushroom" },
  ];

  const cheeselist = [
    { name: "Extra Cheese", key: "extraCheese" },
    { name: "Cheeseburst", key: "cheeseburst" },
  ];

  const getTotalPrice = () => {
    let total = selectedSizePrice * quantity;

    addonsList.forEach((addon) => {
      if (addons[addon.key]) {
        total += AddonsPrice * quantity;
      }
    });

    cheeselist.forEach((addon) => {
      if (addons[addon.key]) {
        total += cheesePrice * quantity;
      }
    });
    return total;
  };

  const handleSizeChange = (event) => {
    const newSize = event.target.value;
    setSelectedSize(newSize);

    // Update the selected size's price based on the chosen size
    switch (newSize) {
      case size1:
        setSelectedSizePrice(priceR);
        setAddonsPrice(30);
        setcheesePrice(40);
        break;
      case size2:
        setSelectedSizePrice(priceM);
        setAddonsPrice(50);
        setcheesePrice(60);
        break;
      case size3:
        setSelectedSizePrice(priceL);
        setAddonsPrice(70);
        setcheesePrice(90);
        break;
      default:
        setSelectedSizePrice(priceR); // Default to priceR if an unknown size is selected
    }
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleAddBtnToCart = () => {
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

  const handleAddToCart = () => {
    if (selectedSize === "") {
      // Handle the case where no size is selected
      alert("Please select a size.");
      return;
    }
    const selectedAddons = [];
    addonsList.forEach((addon) => {
      if (addons[addon.key]) {
        selectedAddons.push({
          name: addon.name,
          price: AddonsPrice,
        });
      }
    });

    const selectedCheeses = [];
    cheeselist.forEach((addon) => {
      if (addons[addon.key]) {
        selectedCheeses.push({
          name: addon.name,
          price: cheesePrice,
        });
      }
    });

    const product = {
      id,
      name: `${name} [${selectedSize}]`,
      price: selectedSizePrice,
      quantity,
      image,
      mrp,
      addons: selectedAddons,
      cheeses: selectedCheeses,
    };

    let total = selectedSizePrice * quantity;

    selectedAddons.forEach((addon) => {
      total += AddonsPrice * quantity;
    });

    selectedCheeses.forEach((addon) => {
      total += cheesePrice * quantity;
    });

    product.totalPrice = total;

    AddToCart(product);
    incrementCart();
    setSelectedSize("");
    setSelectedSizePrice(priceR); // Reset the selected size's price to default
    setShow(false);
    setShowButtons((prevShowButtons) => ({ ...prevShowButtons, [id]: true }));
  };

  const handleRemoveToCart = () => {
    decrementCart();
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    updateCartItemQuantity(id, 0);
    setShowButtons((prevShowButtons) => ({ ...prevShowButtons, [id]: false }));
    localStorage.removeItem(`${id}_quantity`);
  };

  useEffect(() => {
    // Retrieve quantity from local storage on component mount
    const storedQuantity = localStorage.getItem(`${id}_quantity`);
    if (storedQuantity) {
      setQuantity(parseInt(storedQuantity, 10));
      setShowButtons((prevShowButtons) => ({ ...prevShowButtons, [id]: true }));
    }
  }, [id]);

  const [showFullDescription, setShowFullDescription] = useState(false);
  const toggleDescription = () => setShowFullDescription(!showFullDescription);

  const hasPriceOptions =
    typeof price === "object" &&
    "priceR" in price &&
    "priceM" in price &&
    "priceL" in price;

  return (
    <>
      <hr />
      <div className="product-card">
        <div className="product-details">
          <h3 className="product-name">{name}</h3>
          <p style={{ fontWeight: "700" }}>
            ₹{priceR || price}
            <span
              style={{
                textDecoration: "line-through",
                marginLeft: ".5rem",
                color: "grey",
              }}
            >
              {mrp}
            </span>
            {!hasPriceOptions && (
              <span
                style={{
                  marginLeft: ".5rem",
                  color: "var(--bg)",
                }}
              >
                {(((mrp - price) / mrp) * 100).toFixed(0)}% off
              </span>
            )}
            {hasPriceOptions && (
              <span
                style={{
                  marginLeft: ".5rem",
                  color: "var(--bg)",
                }}
              >
                {(((mrp - priceR || price) / mrp) * 100).toFixed(0)}% off
              </span>
            )}
          </p>
          <p className="description" onClick={toggleDescription}>
            {showFullDescription ? (
              description
            ) : (
              <>
                {description.length > 20
                  ? description.substring(0, 20) + "..."
                  : description}
                {description.length > 20 && (
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
            {hasPriceOptions && (
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
                  <h3>Select Size</h3>

                  <Table striped bordered hover>
                    <tbody>
                      <tr>
                        <td>{size1}</td>
                        <td>₹{priceR}</td>
                        <td>
                          <input
                            type="radio"
                            value={size1}
                            checked={selectedSize === size1}
                            onChange={handleSizeChange}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>{size2}</td>
                        <td>₹{priceM}</td>
                        <td>
                          <input
                            type="radio"
                            value={size2}
                            checked={selectedSize === size2}
                            onChange={handleSizeChange}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>{size3}</td>
                        <td>₹{priceL}</td>
                        <td>
                          <input
                            type="radio"
                            value={size3}
                            checked={selectedSize === size3}
                            onChange={handleSizeChange}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </Table>

                  <h3>Cheese</h3>

                  <Table striped bordered hover>
                    <tbody>
                      {cheeselist.map((addon) => (
                        <tr key={addon.key}>
                          <td>{addon.name}</td>
                          <td>₹{cheesePrice}</td>
                          <td>
                            <Form.Check
                              type="checkbox"
                              checked={addons[addon.key]}
                              onChange={() => handleAddonChange(addon.key)}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                  <h3>Toppings</h3>

                  <Table
                    striped
                    bordered
                    hover
                    style={{ marginBottom: "10rem" }}
                  >
                    <tbody>
                      {addonsList.map((addon) => (
                        <tr key={addon.key}>
                          <td>{addon.name}</td>
                          <td>₹{AddonsPrice}</td>
                          <td>
                            <Form.Check
                              type="checkbox"
                              checked={addons[addon.key]}
                              onChange={() => handleAddonChange(addon.key)}
                            />
                          </td>
                        </tr>
                      ))}
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
                      style={{ color: "var(--bg)", border: "none" }}
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
          {hasPriceOptions && <div className="cust">customisable</div>}
        </div>
      </div>
    </>
  );
};

export default PizzaPage;
