import React, { useState } from "react";
import superheromail from "./superheromail.png";
import "../sass/contact.scss";
import HeaderPages from "../components/HeaderPages";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const clearForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    clearForm();
  };

  return (
    <>
      <HeaderPages />
      <div className="contact-container">
        <h3>Contact us</h3>
        <img src={superheromail} alt="SuperheroContactForm" width="350px" />
        <form className="form-container" onSubmit={onSubmit}>
          <label>
            Your name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Your Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Enter your Message:
            <input
              type="textarea"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Contact;
