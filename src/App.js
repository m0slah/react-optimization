import React, { useState } from "react";
import "./App.css";

import Button from "./Components/UI/Button";
import Card from "./Components/UI/Card";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  const toggleParagraphHandler = () => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  };

  return (
    <div className="App">
      <Card>
        <h1>Hello There</h1>
        {showParagraph && <p>new some thing!</p>}
        <Button onClick={toggleParagraphHandler}>Paragraph Toggle</Button>
      </Card>
    </div>
  );
}

export default App;
