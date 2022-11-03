import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import RegistrationForm from "./components/Form/RegistrationForm";
import AuthorizationForm from './components/Form/AuthorizationForm';
import IdPost from './components/Form/IdPost';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      Регистрация
    <RegistrationForm />
    <br/>
      Авторизация
    <AuthorizationForm />
    <br/>
      Контрольная ID
    <IdPost />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
