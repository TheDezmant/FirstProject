import styled from "@emotion/styled";

const StyledMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.w === undefined ? "100px" : props.w)};
  height: 100px;
  background-color: white;
  border-radius: 50px;
  box-shadow: 3px 3px 10px grey;
`;
export { StyledMessage };
