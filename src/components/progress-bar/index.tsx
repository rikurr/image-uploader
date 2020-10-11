import React from "react";
import styles from "./index.module.css";

export const ProgressBar: React.FC = () => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>Uploading... </p>
      <div className={styles.bar}>
        <div className={styles.done}></div>
      </div>
    </div>
  );
};
