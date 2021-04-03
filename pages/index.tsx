import React from "react";
import SinglePriceGrid from "../components/single-price-grid";
import Attribution from "../components/_layout/attribution";
import NextHead from "../components/_layout/head";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <div className={styles.home}>
      <NextHead />
      <SinglePriceGrid />
      <Attribution />
    </div>
  );
}
