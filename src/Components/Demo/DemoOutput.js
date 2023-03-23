import React from "react";
import MyParagraph from "./MyParagraph";

function DemoOutput(props) {
  console.log("DEMOoUTPUT RUNNING");
  return <MyParagraph>{props.onShow ? "new some thing!" : ""}</MyParagraph>;
}

export default React.memo(DemoOutput);
