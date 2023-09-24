import logo from './logo.svg';
import './App.css';
import React from 'react';
// import Login from './pages/Login';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import AuthComponent from './pages/AuthComponent'
import Home from './pages/Home';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/login' element ={<AuthComponent/>} />
          <Route path="/home" element = {<Home/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
