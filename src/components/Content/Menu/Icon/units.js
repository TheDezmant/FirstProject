import styled from "@emotion/styled";

const StyledIcon = styled.div`
  background-color: ${(props)=> props.active ? 'green' : "white"};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  border: 2px solid ${(props)=> props.active ? 'red' : "blue"}
`

  export default StyledIcon;