import React from "react";
import Button from "../_ui/button";
import Card from "../_ui/card";
import styles from './Section.module.scss'

function Section() {
  return (
    <Card className={styles.section}>
      <h2>Monthly Subscription</h2>
      <div>
        <h3>$29</h3> <span>per month</span>
      </div>
      <p>Full access for less than $1 a day</p>
      <Button>Sign Up</Button>
    </Card>
  );
}

export default Section;
