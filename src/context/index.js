import React from "react";

export const ThemeContext = React.createContext();
export const themes = {
    dark: {
        bgColor: "black",
        color: "white",
    },
    white: {
        bgColor: "white",
        color: "black",
    },
};
