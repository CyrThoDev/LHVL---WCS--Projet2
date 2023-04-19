import React, { useState } from "react";
import "../sass/contact.scss";

function Contact() {
  const [name, setName] = useState("Your name");
  const [email, setEmail] = useState("Your email");
  const [message, setMessage] = useState("Your message");

  return (
    <>
      <div>Contact</div>
      <form className="form-container">
        <label>
          Enter your name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Enter your Email:
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
            rows={5}
            cols={5}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Contact;
