import React from "react";
import { StyledButton } from "./units";

const MyButton = (props) => {
  return (
    <StyledButton onClick={props.onClick} color={props.color} br={props.br}>
      {props.children}
    </StyledButton>
  );
};

export default MyButton;
