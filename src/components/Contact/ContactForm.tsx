import React from "react";
import styles from "../../styles/ContactForm.module.scss";
import Button from "../Button/Button";

const ContactForm = () => {
  return (
    <div className={styles.container}>
      <form>
        <input placeholder="Name" type="text" />
        <input placeholder="Email" type="email" />
        <textarea placeholder="Send me your message"></textarea>
        <Button  text = "Send"></Button>
      </form>
    </div>
  );
};

export default ContactForm;
