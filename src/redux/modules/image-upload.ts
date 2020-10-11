import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../store";

type imageUploadState = {
  status: "upload" | "uploading" | "uploaded";
};

const initialState: imageUploadState = {
  status: "upload",
};

export const imageUploadSlice = createSlice({
  name: "imageUpload",
  initialState,
  reducers: {},
});

export const selectImageUpload = (state: RootState) => state.imageUpload;
export default imageUploadSlice.reducer;
