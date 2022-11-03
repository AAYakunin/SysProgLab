import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Link, Route, Routes} from 'react-router-dom';
import RegistrationForm from "./components/Form/RegistrationForm";
import AuthorizationForm from "./components/Form/AuthorizationForm";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <p><Link to="/registration">Registration</Link></p>
          <p><Link to="/login">Login</Link></p>
          <p><Link to="/">Home</Link></p>
        </div>
        <Routes>
          <Route path="/registration" element={<RegistrationForm/>}/>
          <Route path="/login" element={<AuthorizationForm/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/user/:user/;password" element={<User/>}/>;
        </Routes>
      </header>
    </div>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function User() {
  const {user} = useParams();
  const {password} = useParams();
  const navigate = useNavigate();
  if(user === 'admin' && password === '123') {
    navigate('/');
  }
  return <>
    {user}/{password}
  </>
}

export default App;
