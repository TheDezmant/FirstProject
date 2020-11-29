import React, { useState, useEffect, useContext } from "react";
import { Wrapper } from "./units";
import { ThemeContext } from "../../context";

const Sum = () => {
    const [text1, setText1] = useState();
    const [text2, setText2] = useState();
    const [sum, setSum] = useState(0);

    const [sec, setSec] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setSec((sec) => sec + 1);
        }, 1000);
        return () => clearInterval(timer);
    }, []);
    const theme = useContext(ThemeContext);

    return (
        <Wrapper>
            <button style={{ background: theme.bgColor, color: theme.color }} onClick={() => {}}>
                test
            </button>
            <input placeholder={"Введите число 1"} value={text1} onChange={(e) => setText1(e.target.value)} />
            <input placeholder={"Введите число 2"} value={text2} onChange={(e) => setText2(e.target.value)} />

            <button onClick={() => setSum(Number(text1) + Number(text2))}>Сложить</button>

            <h2>Сумма: {sum}</h2>
            <h2>Sec: {sec}</h2>
        </Wrapper>
    );
};

export default Sum;
