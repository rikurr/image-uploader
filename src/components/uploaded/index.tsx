import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import styles from "./index.module.css";
import { useToasts } from "react-toast-notifications";
import CopyToClipboard from "react-copy-to-clipboard";

type Props = {
  image: {
    id: string;
    path: string;
  };
};

export const Uploaded: React.FC<Props> = ({ image }) => {
  const { addToast } = useToasts();

  const handleClick = React.useCallback(() => {
    addToast("クリックボードにコピーしました!", {
      appearance: "success",
      autoDismiss: true,
    });
  }, [addToast]);

  return (
    <div className={styles.container}>
      <CheckCircleIcon style={{ color: "#219653", fontSize: "36px" }} />
      <p className={styles.text}>Uploaded Successfully!</p>
      <div className={styles.imageWrap}>
        <img
          className={styles.image}
          src={image.path}
          alt="アップロードされた画像"
        />
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
