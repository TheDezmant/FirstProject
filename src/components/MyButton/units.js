import styled from "@emotion/styled";

const StyledButton = styled.div`
    background-color: ${(props) => (props.color === undefined ? "orange" : props.color)};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    width: 100px;
    height: 30px;
    border-radius: ${({ br }) => (br === undefined ? "10px" : br)};
    cursor: pointer;

    &:hover {
        opacity: 0.6;
    }
`;
export { StyledButton };
