import React, { useState } from "react";
import { Wrapper, Light } from "./units";

const TrafficLight = () => {
  const [activeLight, setActiveLight] = useState(0);

  return (
    <>
      <button
        onClick={() => {
          setActiveLight((prev) => {
            if (prev === 2) return 0;
            else return prev + 1;
          });
        }}
      >
        Switch
      </button>
      <Wrapper>
        {["red", "yellow", "green"].map((c, i) => (
          <Light color={c} active={activeLight === i} />
        ))}
      </Wrapper>
    </>
  );
};

export default TrafficLight;
