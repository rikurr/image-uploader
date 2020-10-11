import React from "react";
import { Upload } from "../../components/upload";
import { Uploading } from "../../components/uploading";
import { Uploaded } from "../../components/uploaded/index";

import styles from "./index.module.css";

export const ImageArea: React.FC = () => {
  return (
    <>
      <Upload />
      <Uploading />
      <Uploaded />
    </>
  );
};
