import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button type={props.type || 'button'} onClick={props.onClick}>
      <span className={classes.shadow}></span>
      <span className={classes.edge}></span>
      <span className={`${classes.front} ${classes.text}`}> {props.children}</span>
    </button>
  );
};

export default Button;
