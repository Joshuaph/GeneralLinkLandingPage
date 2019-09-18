import React, { useState } from "react";
import CardContainer from "./components/Card Module/CardContainer";
import Navbar from "./components/Navbar Module/Navbar";
import "./App.scss";

function App() {
  const [type, setType] = useState("Sportex");

  return (
    <main>
      <Navbar type={type} setType={setType} />
      <CardContainer type={type} setType={setType} />
    </main>
  );
}

export default App;
