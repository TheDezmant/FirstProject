import React, { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
import Child3 from "./Child3";

export default ({children}) => {
  const [valueOfChild2, setValueOfChild2] = useState(10)
  const [colorOfChild3, setColorOfChild3] = useState('black')
  const [color1, setColor1] = useState('black')
  const [color2, setColor2] = useState('black')
  const [color3, setColor3] = useState('grey')

  
  return (       
    <div>
        <Child1 changeColor1={setColor1} changeColor2={setColor2} changeColor3={setColor3}/>
        <Child2 value={valueOfChild2} bgColor={color3}/>
        <Child3 bgColor1={color1} bgColor2={color2}/>
        
    </div>
  );
}

