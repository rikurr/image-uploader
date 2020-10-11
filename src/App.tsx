import React from "react";
import "minireset.css";
import "./App.css";
import { ImageArea } from "./components/image-area";
import { ProgressBar } from "./components/progress-bar";
import { Uploaded } from "./components/uploaded";

function App() {
  return (
    <div className="App">
      {/* <ImageArea /> */}
      {/* <ProgressBar /> */}
      <Uploaded />
    </div>
  );
}

export default App;
