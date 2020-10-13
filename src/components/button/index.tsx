import React from "react";
import styles from "./index.module.css";

type Props = {
  clickEvent?: () => void;
};

export const Button: React.FC<Props> = ({ children, clickEvent }) => {
  return (
    <p className={styles.btn} onClick={clickEvent}>
      {children}
    </p>
  );
};
