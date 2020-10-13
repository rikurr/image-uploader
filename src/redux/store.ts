import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { imageUploadReducer } from "./modules";

export const store = configureStore({
  reducer: {
    imageUpload: imageUploadReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
