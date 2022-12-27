import React from "react";
import "./Card.css";

const Card = (props) => {
  const styleClasses = `card ${props.className}`;
  console.log(props.children);

  return <div className={styleClasses}>{props.children}</div>;
};

export default Card;
