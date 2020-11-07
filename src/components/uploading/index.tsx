import React from "react";
import styles from "./index.module.css";
import { useSelector } from "react-redux";
import { selectImageUpload } from "../../redux/modules/image-upload";

export const Uploading: React.FC = () => {
  const { progress } = useSelector(selectImageUpload);
  
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
