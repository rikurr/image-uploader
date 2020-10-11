import React from "react";
import "minireset.css";
import "./App.css";
import { ImageArea } from "./components/image-area";
import { ProgressBar } from "./components/progress-bar";

function App() {
  return (
    <div className="App">
      {/* <ImageArea /> */}
      <ProgressBar />
    </div>
  );
}

export default App;
