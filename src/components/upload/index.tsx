import React from "react";
import styles from "./index.module.css";

import { ReactComponent as Logo } from "../../assets/image.svg";
import { Button } from "../button";

export const Upload: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Upload your image</h1>
        <p className={styles.text}>File should be Jpeg, Png,...</p>
        <div className={styles.dragAndDrop}>
          <div className={styles.logoContainer}>
            <Logo />
          </div>
          <p className={styles.logoText}>Drag & Drop your image here</p>
        </div>
        <p className={styles.subText}>Or</p>
        <label>
          <input type="file" className={styles.file} />
          <Button>Choose a file</Button>
        </label>
      </div>
    </>
  );
};
