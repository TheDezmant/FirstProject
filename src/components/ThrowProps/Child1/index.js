import React, { useState } from "react";

export default (props) => {
  return (         
    <div>
        <button onClick={()=>props.buttonValueClick(props.value+1)}>Инкремент</button>
        <button onClick={()=>{
          props.changeColor1('red');
          props.changeColor2('green');
          props.changeColor3('black');
        }}>Сменить цвет</button>
    </div>
  )
}