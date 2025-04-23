import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SignInwithGoogle from "./SignInWithGoogle";
import { ToastContainer } from "react-bootstrap";


<ToastContainer />
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);  

  // Fungsi untuk toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = async (e) => { // ⬅️ Perbaikan: Menjadikan fungsi async
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password); // ⬅️ Perbaikan: Tambahkan `await`
      console.log("User logged in successfully");

      //   Pindah Window
      window.location.href = "/Profile";
      // |||||||||||||||||||||||||||||||   

      toast.success("User logged in successfully", { position: "top-center" });
    } catch (error) {
      console.error("Login Error:", error.message);
      toast.error(error.message, { position: "bottom-center" });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Login</h3>

      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      {/* Kolom password dengan show/Hide feature */}
      <div className="mb-3 password-container">
        <label>Password</label>
        <div className="password-box">
          <input
            type={showPassword ? "text" : "password"}
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span className="toggle-password" onClick={togglePasswordVisibility}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
      </div>

      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
      <p className="forgot-password text-right">
        New user? <a href="/register">Register Here</a>
      </p>
      <SignInwithGoogle />
    </form>
  );
}

export default Login;
