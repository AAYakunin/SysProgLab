import React, {FormEvent, useState} from 'react';
import './Form.css';
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";


export default function AuthorizationForm() {
    const [login, setLogin] = useState("");
    const [loginError, setLoginError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const navigate = useNavigate();

    const isValid = (): boolean => {
        let result = true;
        setLoginError("");
        setPasswordError("");
        if (login == 'admin') {
            return true;
        }
        if (login.length === 0) {
            setLoginError("Логин не может быть пустым");
            result = false;
        }
        if (!/^([a-z0-9]{6,20})$/.test(login)) {
            setLoginError("Логин должен содержать от 6 до 20 символов латинского алфавита и цифры.");
            result = false;
        }
        if (password.length === 0) {
            setPasswordError("Пароль не может быть пустым");
            result = false;
        }
        return result;
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault();
        if(isValid() ) {
            navigate("/"+{login}+"/" +{password});
        }
    };

    return <>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Логин
                    <input value={login}
                           onChange={e => setLogin(e.target.value)}
                    />
                </label>
                {loginError && <div className="error">
                    {loginError}
                </div>}
            </div>
            <div>
                <label>Пароль.
                    <input value={password}
                           type={"password"}
                           onChange={e => setPassword(e.target.value)}
                    />
                </label>
                {passwordError && <div className="error">
                    {passwordError}
                </div>}
            </div>
            <button type={"submit"}>Вход</button>
        </form>
    </>;
}
