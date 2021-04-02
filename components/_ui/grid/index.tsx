import React from "react";
import styles from "./index.module.scss";

function Grid({ children }) {
  return <div className={styles.grid}>{children}</div>;
}

export default Grid;
