import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./components/CSS/Login.css";
// import Firebase from "./components/firebase.js";
import {  BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import Profile from "./components/Profile";

import { ToastContainer } from "react-toastify";

function App() {
    <Router>
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/Home" element={<Profile/>} /> 
            <Route path="/Login" element={<Login/>} />
            <Route path="/Register" element={<Register/>} />
            <Route path="/Profile" element={<Profile/>} /> 
          </Routes>
          </div>
        </div>
      </div>
    </Router>
}

export default App;