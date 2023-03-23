import React, { useState ,useCallback } from "react";
import "./App.css";
import DemoOutput from "./Components/Demo/DemoOutput";

import Button from "./Components/UI/Button";
import Card from "./Components/UI/Card";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log("APP RUNNING!");

  const toggleParagraphHandler = useCallback(() => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  },[]);

  return (
    <div className="App">
      <Card>
        <h1>Hello There</h1>
        <DemoOutput onShow={false} />
        <Button onClick={toggleParagraphHandler}>Paragraph Toggle</Button>
      </Card>
    </div>
  );
}

export default App;
