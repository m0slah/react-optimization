import React from "react";

import classes from "./Card.module.css";

function Card(props) {
  console.log("CARD RUNNING!");
  return <div className={classes.card}>{props.children}</div>;
}

export default React.memo(Card);
