import React from "react";
import { useDispatch } from "react-redux";
import { useDropzone } from "react-dropzone";

import styles from "./index.module.css";
import { ReactComponent as Logo } from "../../assets/image.svg";
import { Button } from "../button";
import { imageUploadAsync } from "../../redux/modules/image-upload";

export const Upload: React.FC = () => {
  const dispatch = useDispatch();

  const uploadImage = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files;
      if (file) {
        dispatch(imageUploadAsync(file[0]));
      }
    },
    [dispatch]
  );

  const onDrop = React.useCallback(
    (acceptedFiles) => {
      dispatch(imageUploadAsync(acceptedFiles[0]));
    },
    [dispatch]
  );

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Upload your image</h1>
        <p className={styles.text}>File should be Jpeg, Png,...</p>
        <div {...getRootProps({ className: `${styles.dragAndDrop}` })}>
          <input {...getInputProps()} />
          <div className={styles.logoContainer}>
            <Logo />
          </div>
          <p className={styles.logoText}>Drag & Drop your image here</p>
        </div>
        <p className={styles.subText}>Or</p>
        <label>
          <input type="file" onChange={uploadImage} className={styles.file} />
          <Button>Choose a file</Button>
        </label>
      </div>
    </>
  );
};
