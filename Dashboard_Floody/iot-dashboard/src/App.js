import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./components/CSS/Login.css";
// import Firebase from "./components/firebase.js";
import {  BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Login from "./components/Login";
import Signup from "./components/Register";
import Profile from "./components/Profile";

import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Signup />} />
            <Route path="/Profile" element={<Profile />} /> 
            {/* <Route path="/Profile" element={<Profile />} />  */}
          </Routes>
          <ToastContainer />
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App;