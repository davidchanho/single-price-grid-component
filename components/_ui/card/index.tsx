import React, { PropsWithChildren } from "react";
import styles from "./index.module.scss";

interface Props {
  className: string;
}

function Card({ children, className }: PropsWithChildren<Props>) {
  return (
    <section className={`${styles.card} ${className}`}>{children}</section>
  );
}

export default Card;
