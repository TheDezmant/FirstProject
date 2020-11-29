import React, { useState, useEffect, useContext } from "react";
import Header from "./components/Header/index";
import Content from "./components/Content";
import Authorization from "./components/Authorization";
import { ThemeContext } from "./context";
import { themes } from "./context";

let timerId = null;

const App = () => {
    const [isAuth, setIsAuth] = useState(false);
    const [sec, setSec] = useState(0);
    const Theme = useContext(ThemeContext);

    useEffect(() => {
        timerId = setInterval(() => {
            setSec((prevSec) => prevSec + 1);
        }, 1000);
        return () => clearInterval(timerId);
    }, []);

    return (
        <ThemeContext.Provider value={themes.white}>
            {isAuth ? (
                <>
                    <Header />
                    <Content />
                </>
            ) : (
                <Authorization onAuth={() => setIsAuth(true)} />
            )}
            <div>
                <button onClick={() => clearInterval(timerId)}>Откл таймер</button>
                <h2>Сек: {sec}</h2>
            </div>
        </ThemeContext.Provider>
    );
};

export default App;
