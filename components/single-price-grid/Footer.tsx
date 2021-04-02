import React from "react";
import Card from "../_ui/card";
import styles from "./Footer.module.scss";

const data = [
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
        {data.map((d, index) => {
          return (
            <li key={`footer-${index}`}>
              <small>{d}</small>
            </li>
          );
        })}
      </ul>
    </Card>
  );
}

export default Footer;
