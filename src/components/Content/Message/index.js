import React from "react";
import { StyledMessage } from "./units";

const Message = (props) => {
  return (
    <>
      <StyledMessage onClick={props.onClick} w={props.w}>
        <img src="/icons/message.png" alt="" width="65px" height="65px" />
        {props.children}
      </StyledMessage>
    </>
  );
};

export default Message;
