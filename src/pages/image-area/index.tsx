import React from "react";
import { Upload } from "../../components/upload";
import { Uploading } from "../../components/uploading";
import { Uploaded } from "../../components/uploaded/index";

import { useSelector } from "react-redux";
import { selectImageUpload } from "../../redux/modules/image-upload";

export const ImageArea: React.FC = () => {
  const imageUpload = useSelector(selectImageUpload);
  const { status, progress, image } = imageUpload;

  // 画面切り替え
  if (status === "upload") {
    return <Upload />;
  }
  if (status === "uploading") {
    return <Uploading progress={progress} />;
  }
  if (status === "uploaded") {
    return <Uploaded image={image} />;
  }

  return <></>;
};
