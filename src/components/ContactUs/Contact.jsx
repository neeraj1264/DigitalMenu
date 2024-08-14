// ContactForm.js

import React, { useState } from "react";
import "./ContactForm.css"; // Import the CSS file for styling
import { Button } from "react-bootstrap";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === "number") {
      // Validate phone number and set error message
      const isValidPhoneNumber = validatePhoneNumber(value);
      setPhoneNumberError(isValidPhoneNumber ? "" : "Invalid phone number");
    }
  };

  const validatePhoneNumber = (number) => {
    // Check if the phone number has exactly 10 digits
    return /^\d{10}$/.test(number);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the phone number
    if (!validatePhoneNumber(formData.number)) {
      setPhoneNumberError("Invalid phone number");
      return;
    }

    // Clear the phone number error message if it was previously set
    setPhoneNumberError("");

    const formEndpoint = "https://formspree.io/f/xleqlpgl";

    try {
      setSubmitting(true);

      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Form submitted successfully!");
        // Clear form data after successful submission
        setFormData({
          name: "",
          number: "",
          message: "",
        });
      } else {
        console.error("Form submission failed!");
        alert("Form submission failed!");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="contact-form-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Phone Number:
          <input
            type="tel"
            name="number"
            value={formData.number}
            onChange={handleChange}
            pattern="[0-9]{10}"
            required
          />
          {phoneNumberError && (
            <span className="error-message">{phoneNumberError}</span>
          )}
        </label>
        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit" disabled={submitting} className="Contact-btn">
          {submitting ? "Submitting..." : "Submit"}
        </button>{" "}
      </form>
    </div>
  );
};

export default ContactForm;
