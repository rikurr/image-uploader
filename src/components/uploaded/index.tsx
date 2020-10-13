import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import styles from "./index.module.css";
import { Button } from "../button";
import { useSelector } from "react-redux";
import { selectImageUpload } from "../../redux/modules/image-upload";

export const Uploaded: React.FC = () => {
  const { image } = useSelector(selectImageUpload);
  return (
    <div className={styles.container}>
      <CheckCircleIcon style={{ color: "#219653", fontSize: "36px" }} />
      <p className={styles.text}>Uploaded Successfully!</p>
      <div className={styles.imageWrap}>
        <img src={image.path} alt="アップロードされた画像" />
      </div>
      <p className={styles.imageLink}>
        <p>{image.path}</p>
        <Button>Copy Link</Button>
      </p>
    </div>
  );
};
