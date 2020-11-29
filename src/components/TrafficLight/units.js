import styled from "@emotion/styled";

const Wrapper = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 120px;
  height: 380px;
  border: 2px solid gray;
`;

const Light = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 10px;
  width: 100px;
  height: 100px;
  border: 2px solid gray;
  border-radius: 100%;

  background-color: ${({ color, active }) => (active ? color : "white")};
`;

export { Wrapper, Light };
