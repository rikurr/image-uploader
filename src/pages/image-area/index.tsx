import React from "react";
import { Upload } from "../../components/upload";
import { Uploading } from "../../components/uploading";
import { Uploaded } from "../../components/uploaded/index";

import styles from "./index.module.css";
import { useSelector } from "react-redux";
import { selectImageUpload } from "../../redux/modules/image-upload";

export const ImageArea: React.FC = () => {
  const imageUpload = useSelector(selectImageUpload);
  const { status } = imageUpload;

  if (status === "upload") {
    return <Upload />;
  }
  if (status === "uploading") {
    return <Uploading />;
  }
  if (status === "uploaded") {
    return <Uploaded />;
  }
  return <></>;
};
