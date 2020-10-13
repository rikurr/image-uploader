import React from "react";
import "minireset.css";
import { ToastProvider } from "react-toast-notifications";

import "./App.css";
import { ImageArea } from "./pages/image-area";

function App() {
  return (
    <ToastProvider autoDismiss autoDismissTimeout={2000} placement="top-right">
      <div className="App">
        <ImageArea />
      </div>
    </ToastProvider>
  );
}

export default App;
