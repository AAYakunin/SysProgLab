import React, {FormEvent, useState} from 'react';
import './Form.css';
import set = Reflect.set;

type Result = {
    userID: string;
    id: string;
    title: string;
    body: string;
} | undefined;

type UserData = {
    id: string;
    name: string;
    username: string;
    email: string;
    address: {};
} | undefined;

const URL = "https://jsonplaceholder.typicode.com/posts";
const URL2 = "https://jsonplaceholder.typicode.com/users";

export default function Fetcher() {
    const [id, setId] = useState("");
    const [userId, setUserId] = useState("");
    const [error, setError] = useState("");
    const [result, setResult] = useState<Result>();
    const [userData, setUserData] = useState<UserData>();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");
        try {

            const response = await fetch(`${URL}/${id}`);
            if (response.status !== 200) {
                throw Error(response.statusText);
            }
            const data = await response.json();
            setResult(data);
            // userID != data.userId
            const response2 = await fetch(`${URL2}/${data.userId}`);
            if (response2.status !== 200) {
                throw Error(response2.statusText);
            }
            const data2 = await response2.json();
            console.log(data.userId);
            console.log(userId);
            setUserData(data2);

/*
            const response = await fetch(URL, {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
            const result = await response.json();
            setResult(result);
 */
        } catch(e) {
            if (e instanceof Error) {
                setError(e.message);
            }
        }
    };

    return <form onSubmit={handleSubmit}>
                <label>
                    ID:
                    <input type="text" value={id} onChange={e => {
                        setId(e.target.value)
                    }}/> <br/>
                </label>
        <button type="submit">Получить данные</button>
        {result && <div>
            <b>{result?.title}</b><br/>
            {result?.body}
            <br/>
            <b>{userData?.name} - {userData?.email}</b>
        </div>}
        {error && <div className="error">{error}</div>}
    </form>
}
