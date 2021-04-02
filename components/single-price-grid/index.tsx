import React from "react";
import Grid from "../_ui/grid";
import Footer from "./Footer";
import Header from "./Header";
import styles from "./index.module.scss";
import Section from "./Section";

function SinglePriceGrid() {
  return (
    <div className={styles.container}>
      <Grid>
        <Header />
        <Section />
        <Footer />
      </Grid>
    </div>
  );
}

export default SinglePriceGrid;
