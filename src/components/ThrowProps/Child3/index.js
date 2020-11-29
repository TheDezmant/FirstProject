import React, { useState } from "react";
import SubChild3 from './SubChild3'

export default (props) => {
  return (        
    <div>
        <SubChild3 bgColor={props.bgColor1}/>
        <SubChild3 bgColor={props.bgColor2}/>

    </div>
  );
}

