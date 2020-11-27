import React from "react";
import { useDropzone } from "react-dropzone";

import styles from "./index.module.css";
import { ReactComponent as Logo } from "../../assets/image.svg";
import { Button } from "../button";

type Props = {
  handleUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onDrop: (file: File[]) => void;
};

export const Upload: React.FC<Props> = ({ handleUpload, onDrop }) => {
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
          <input type="file" onChange={handleUpload} className={styles.file} />
          <Button>Choose a file</Button>
        </label>
      </div>
    </>
  );
};
