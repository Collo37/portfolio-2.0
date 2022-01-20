import Button from "../../components/UI components/Button/Button";

import "./contactStyles.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <form className="contact-form">
        <h2>Contact Me</h2>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Send me a message" />
        <Button text="Send" />
      </form>
    </div>
  );
};

export default Contact;
