import React from 'react'
import StyledIcon from './units'

const Icon = (props) => {
    return (
        <StyledIcon onClick={props.onClick} img={props.img} active={props.active}>
            <img src={props.img} alt="" height="30px" width="30px"/>
        </StyledIcon>
    );
}
 export default Icon;
