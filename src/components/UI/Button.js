import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  //Be able to set button type outside this componenet, or a fallback "button" type if it's not set from a prop
  return (
    <button
      className={classes.button}
      type={props.type || "button"}
    //   Any function received to Button component via onClick props is passed to built-in button here
      onClick={props.onClick}
    >
      {/* I'm expecting content to be passed inbetween my button tags, so props.children */}
      {props.children}
    </button>
  );
};

export default Button;
