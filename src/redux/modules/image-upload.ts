import { createSlice, Observable, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../store";
import { storage } from "../../firebase/index";

type imageUploadState = {
  status: "upload" | "uploading" | "uploaded";
  image: {
    id: string;
    path: string;
  };
};

type Payload = {
  id: string;
  path: string;
};

type Event<T = EventTarget> = {
  target: T;
};

const initialState: imageUploadState = {
  status: "upload",
  image: {
    id: "",
    path: "",
  },
};

export const imageUploadSlice = createSlice({
  name: "imageUpload",
  initialState,
  reducers: {
    startLoadingAction: (state) => {
      state.status = "uploading";
    },
    successLoadingAction: (state) => {
      state.status = "uploaded";
    },
    failedLoadingAction: (state) => {
      state.status = "upload";
    },
    setImage: (state, action: PayloadAction<Payload>) => {
      state.image = action.payload;
    },
  },
});

export const {
  startLoadingAction,
  successLoadingAction,
  failedLoadingAction,
  setImage,
} = imageUploadSlice.actions;

export const imageUploadAsync = (event: Event<HTMLInputElement>): AppThunk => (
  dispatch
) => {
  dispatch(startLoadingAction());
  const file = event.target.files;
  if (file) {
    const S = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const N = 16;
    const fileName = Array.from(crypto.getRandomValues(new Uint32Array(N)))
      .map((n) => S[n % S.length])
      .join("");

    const uploadRef = storage.ref("images").child(fileName);
    const uploadTask = uploadRef.put(file[0]);
    uploadTask
      .then(() => {
        uploadTask.snapshot.ref.getDownloadURL().then((URL: string) => {
          console.log(URL);
          console.log(fileName);
          const newImage = { id: fileName, path: URL };
          dispatch(setImage(newImage));
          dispatch(successLoadingAction());
        });
      })
      .catch(() => {
        dispatch(failedLoadingAction());
      });
  }
  return;
};

export const selectImageUpload = (state: RootState) => state.imageUpload;
export default imageUploadSlice.reducer;
