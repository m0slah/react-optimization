import React, { useState, useCallback } from "react";
import "./App.css";
import DemoOutput from "./Components/Demo/DemoOutput";

import Button from "./Components/UI/Button";
import Card from "./Components/UI/Card";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log("APP RUNNING!");

  const toggleParagraphHandler = useCallback(() => {
    allowToggle && setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle((prevAllowToggle) => !prevAllowToggle);
  };

  return (
    <div className="App">
      <Card>
        <h1>Hello There</h1>
        <DemoOutput onShow={showParagraph} />
        <Button onClick={allowToggleHandler}>Allow Toggle</Button>
        <br />
        <Button onClick={toggleParagraphHandler}>Paragraph Toggle</Button>
      </Card>
    </div>
  );
}

export default App;
