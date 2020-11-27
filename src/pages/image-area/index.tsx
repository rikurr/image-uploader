import React from "react";
import { Upload } from "../../components/upload";
import { Uploading } from "../../components/uploading";
import { Uploaded } from "../../components/uploaded/index";

import { useSelector, useDispatch } from "react-redux";
import {
  selectImageUpload,
  imageUploadAsync,
} from "../../redux/modules/image-upload";

export const ImageArea: React.FC = () => {
  const imageUpload = useSelector(selectImageUpload);
  const dispatch = useDispatch();
  const { status, progress, image } = imageUpload;

  const handleUpload = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const files = event.target.files;
      files && dispatch(imageUploadAsync(files[0]));
    },
    [dispatch]
  );

  const onDrop = React.useCallback(
    (acceptedFiles: File[]) => {
      dispatch(imageUploadAsync(acceptedFiles[0]));
    },
    [dispatch]
  );
  // 画面切り替え
  if (status === "upload") {
    return <Upload handleUpload={handleUpload} onDrop={onDrop} />;
  }
  if (status === "uploading") {
    return <Uploading progress={progress} />;
  }
  if (status === "uploaded") {
    return <Uploaded image={image} />;
  }

  return <></>;
};
