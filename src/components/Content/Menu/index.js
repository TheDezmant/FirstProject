import React, { useState, useContext } from "react";
import Icon from "./Icon/index";
import StyledMenu from "./units";
import { ThemeContext } from "../../../context";

const Menu = (props) => {
    const [activeTab, setActiveTab] = useState(1);

    const clickHandler = (tab) => {
        if (props.onChange) props.onChange(tab);
        setActiveTab(tab);
    };
    const theme = useContext(ThemeContext);

    return (
        <StyledMenu>
            <Icon img="icons\micro.png" active={activeTab === 1} onClick={() => clickHandler(1)} />
            <Icon img="icons\mp3.png" active={activeTab === 2} onClick={() => clickHandler(2)} />
            <Icon img="icons\message.png" active={activeTab === 3} onClick={() => clickHandler(3)} />
            <Icon img="icons\netflix.png" active={activeTab === 4} onClick={() => clickHandler(4)} />
        </StyledMenu>
    );
};
export default Menu;
