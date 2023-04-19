import React, { useState } from "react";

// import {useForm} from "react-hook-form";
import "../sass/contact.scss";

function Contact() {
  // const { handleSubmit } = useForm();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const clearForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  const onSubmit = (e) => {
    alert("Thanks for submitting");
    e.preventDefault();
    clearForm();
  };

  // const handleSubmit =() => {

  // }

  return (
    <div className="contact-container">
      <h3>Contact us</h3>
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
  );
}

export default Contact;
