import React from "react";
import Button from "../_ui/button";
import Card from "../_ui/card";
import styles from "./Section.module.scss";

function Section() {
  return (
    <Card className={styles.section}>
      <h2 className={styles.title}>Monthly Subscription</h2>

      <div className={styles.pricePerMonth}>
        <h3 className={styles.price}>$29</h3>{" "}
        <span className={styles.per}>per month</span>
      </div>

      <p className={styles.subtitle}>Full access for less than $1 a day</p>

      <Button>Sign Up</Button>
    </Card>
  );
}

export default Section;
