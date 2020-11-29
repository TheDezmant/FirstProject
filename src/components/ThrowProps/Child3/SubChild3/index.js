import styled from "@emotion/styled";

const SubChild3 = styled.div`
  width: 200px;
  height: 200px;
  background-color: ${(props)=>props.bgColor ? props.bgColor : 'red'};
  margin-bottom: 20px
`;
export default SubChild3;