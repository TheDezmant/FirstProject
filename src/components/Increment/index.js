import React, { useState } from "react";

export default () => {
  const [expression, setExpression] = useState(0);
  return (         
    <span>
        <button onClick={() => setExpression(expression + 1)}>+</button>
        <button onClick={() => setExpression(expression - 1)}>-</button>
        Число: {expression}
    </span>
  );
}

