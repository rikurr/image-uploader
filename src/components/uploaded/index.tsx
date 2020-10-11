import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import styles from "./index.module.css";
import { Button } from "../button";

export const Uploaded: React.FC = () => {
  return (
    <div className={styles.container}>
      <CheckCircleIcon style={{ color: "#219653", fontSize: "36px" }} />
      <p className={styles.text}>Uploaded Successfully!</p>
      <div className={styles.imageWrap}></div>
      <p className={styles.imageLink}>
        <p>https://images.yourdomain.com/photo-1496950866446-325..</p>
        <Button>Copy Link</Button>
      </p>
    </div>
  );
};
