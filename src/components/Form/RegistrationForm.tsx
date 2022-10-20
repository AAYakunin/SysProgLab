import React, {FormEvent, useState} from 'react';
import './Form.css';


export default function RegistrationForm() {
    const [login, setLogin] = useState("");
    const [loginError, setLoginError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    const isValid = (): boolean => {
        let result = true;
        setLoginError("");
        setPasswordError("");
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
        if (password !== passwordConfirmation) {
            setPasswordError("Пароли не совпадают");
            result = false;
        }
        return result;
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(isValid()) {

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
                <br/>
                <label>Повторите пароль
                    <input value={passwordConfirmation}
                           type={"password"}
                           onChange={e => setPasswordConfirmation(e.target.value)}
                    />
                </label>
                {passwordError && <div className="error">
                    {passwordError}
                </div>}
            </div>
            <button type={"submit"}>Регистрация</button>
        </form>
    </>;
}
