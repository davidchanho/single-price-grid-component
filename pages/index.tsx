import React from "react";
import NextHead from "../components/_layout/head";
import SinglePriceGrid from "../components/single-price-grid";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <div className={styles.home}>
      <NextHead />
      <SinglePriceGrid />
    </div>
  );
}
