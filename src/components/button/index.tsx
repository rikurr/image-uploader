import React from "react";
import styles from "./index.module.css";

export const Button: React.FC = ({ children }) => {
  return <p className={styles.btn}>{children}</p>;
};
