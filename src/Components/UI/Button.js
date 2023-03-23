import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  console.log("BUTTON RUNNING!");
  return (
    <button
      type={props.type || "button"}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      <span className={classes.shadow}></span>
      <span className={classes.edge}></span>
      <span className={`${classes.front} ${classes.text}`}>
        {props.children}
      </span>
    </button>
  );
};

export default React.memo(Button);
