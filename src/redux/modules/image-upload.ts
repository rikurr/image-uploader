import { createSlice, Observable, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../store";
import { storage } from "../../firebase/index";

type imageUploadState = {
  status: "upload" | "uploading" | "uploaded";
  image: {
    id: string;
    path: string;
  };
  progress: number;
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
  progress: 0,
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
    progressCounter: (state, action: PayloadAction<number>) => {
      state.progress = state.progress + action.payload;
    },
  },
});

export const {
  startLoadingAction,
  successLoadingAction,
  failedLoadingAction,
  setImage,
  progressCounter,
} = imageUploadSlice.actions;

export const imageUploadAsync = (file: File): AppThunk => (dispatch) => {
  dispatch(startLoadingAction());
  console.log(file);
  const S = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const N = 16;
  const fileName = Array.from(crypto.getRandomValues(new Uint32Array(N)))
    .map((n) => S[n % S.length])
    .join("");
  const uploadRef = storage.ref("images").child(fileName);
  const uploadTask = uploadRef.put(file);
  dispatch(progressCounter(50));
  uploadTask
    .then(() => {
      dispatch(progressCounter(50));
      uploadTask.snapshot.ref.getDownloadURL().then((URL: string) => {
        const newImage = { id: fileName, path: URL };
        dispatch(setImage(newImage));
        dispatch(successLoadingAction());
      });
    })
    .catch(() => {
      dispatch(failedLoadingAction());
    });
};

export const selectImageUpload = (state: RootState) => state.imageUpload;
export default imageUploadSlice.reducer;
