import React from "react";
import styles from "./index.module.css";

type Props = {
  progress: number;
};

export const Uploading: React.FC<Props> = ({ progress }) => {

  return (
    <div className={styles.container}>
      <p className={styles.text}>Uploading... </p>
      <progress
        className={styles.progress}
        value={progress}
        max="100"
      ></progress>
    </div>
  );
};
