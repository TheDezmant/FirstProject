import React, { useState, useContext } from "react";
import { StyledAuthorization, Location } from "./units";
import MyButton from "../MyButton";
import { ThemeContext } from "../../context";

const Authorization = ({ onAuth }) => {
    const [login, setLogin] = useState();
    const [password, setPassword] = useState();
    const theme = useContext(ThemeContext);

    return (
        <StyledAuthorization>
            <div>Выполните вход</div>
            <div>
                <div>
                    <input placeholder="Логин" value={login} onChange={(e) => setLogin(e.target.value)} />
                </div>
                <div>
                    <input placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <Location>
                    <MyButton
                        onClick={() =>
                            login === "admin" && password === "admin" ? onAuth() : alert("Неверный логин или пароль")
                        }
                    >
                        Войти
                    </MyButton>
                    <button style={{ background: theme.bgColor, color: theme.color }}>Я стилизован UseContext</button>
                </Location>
            </div>
        </StyledAuthorization>
    );
};

export default Authorization;
