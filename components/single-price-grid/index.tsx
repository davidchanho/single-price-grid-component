import React from "react";
import styles from "./index.module.scss";
import Signup from "./Signup";

const items = [
  "Tutorials by industry experts",
  "Peer & expert code review",
  "Coding exercises",
  "Access to our Github repos",
  "Community forum",
  "Flashcard decks",
  "New videos every week",
];

function SinglePriceGrid() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Join our community</h1>
        <h2>30-day, hassle-free money back guarantee</h2>
        <p>
          Gain access to our full library of tutorials along with expert code
          reviews. Perfect for any developers who are serious about honing their
          skills.
        </p>
      </header>

      <section className={styles.section}>
        <h2>Monthly Subscription</h2>

        <div className={styles.pricePerMonth}>
          <h3 className={styles.price}>$29</h3>{" "}
          <span className={styles.per}>per month</span>
        </div>

        <p>Full access for less than $1 a day</p>

        <Signup />
      </section>

      <footer className={styles.footer}>
        <h2>Why Us</h2>
        <ul>
          {items.map((item, index) => {
            return (
              <li className={styles.item} key={`footer-${index}`}>
                {item}
              </li>
            );
          })}
        </ul>
      </footer>
    </div>
  );
}

export default SinglePriceGrid;
