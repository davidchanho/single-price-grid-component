import React from "react";
import Card from "../_ui/card";
import styles from "./Footer.module.scss";

const items = [
  "Tutorials by industry experts",
  "Peer & expert code review",
  "Coding exercises",
  "Access to our Github repos",
  "Community forum",
  "Flashcard decks",
  "New videos every week",
];

function Footer() {
  return (
    <Card className={styles.footer}>
      <h2>Why Us</h2>
      <ul>
        {items.map((item, index) => {
          return (
            <li className={styles.item} key={`footer-${index}`}>
              <small>{item}</small>
            </li>
          );
        })}
      </ul>
    </Card>
  );
}

export default Footer;
