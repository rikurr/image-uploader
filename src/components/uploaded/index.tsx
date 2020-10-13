import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import styles from "./index.module.css";
import { useToasts } from "react-toast-notifications";
import CopyToClipboard from "react-copy-to-clipboard";

import { Button } from "../button";
import { useSelector } from "react-redux";
import { selectImageUpload } from "../../redux/modules/image-upload";

export const Uploaded: React.FC = () => {
  const { image } = useSelector(selectImageUpload);
  const { addToast } = useToasts();

  const handleClick = React.useCallback(() => {
    console.log(image.path);

    addToast("クリックボードにコピーしました!", {
      appearance: "success",
      autoDismiss: true,
    });
  }, []);
  return (
    <div className={styles.container}>
      <CheckCircleIcon style={{ color: "#219653", fontSize: "36px" }} />
      <p className={styles.text}>Uploaded Successfully!</p>
      <div className={styles.imageWrap}>
        <img className={styles.image} src={image.path} alt="アップロードされた画像" />
      </div>
      <div className={styles.imageLink}>
        <input
          id="copy"
          type="text"
          value={image.path}
          readOnly
          className={styles.copyText}
        />
        <CopyToClipboard text={image.path}>
          <p onClick={handleClick} className={styles.btn}>
            Copy Link
          </p>
        </CopyToClipboard>
      </div>
    </div>
  );
};
