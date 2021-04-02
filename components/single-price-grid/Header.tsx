import React from "react";
import Card from "../_ui/card";
import styles from "./Header.module.scss";

function Header() {
  return (
    <Card className={styles.header}>
      <h1 className={styles.title}>Join our community</h1>
      <h2 className={styles.subtitle}>
        30-day, hassle-free money back guarantee
      </h2>
      <p className={styles.description}>
        Gain access to our full library of tutorials along with expert code
        reviews. Perfect for any developers who are serious about honing their
        skills.
      </p>
    </Card>
  );
}

export default Header;
