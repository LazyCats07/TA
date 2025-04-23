import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth, db } from "../firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";

function Register(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fname, setFname ] = useState("");
    const [lname, setLname ] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        try{
            await createUserWithEmailAndPassword(auth, email, password);
            const user = auth.currentUser;
            console.log(user);
            if(user){
                await setDoc(doc(db, "Users", user.uid), {
                    email: user.email,
                    firstName: fname,
                    lastName: lname,
                    photo:""
                });
            }
            console.log("user created successfully");
            toast.success("User created successfully", {
                position: "top-center",
            })
            window.location.href = "/Login";
        } catch (error) {
            console.log(error.message);
            toast.success(error.message, {
                position: "bottom-center",
            })
        }
    };
    
    return(
        <form onSubmit={handleRegister}>
            <h3>Login</h3>
            
            <div className="mb-3">
                <label>First Name</label>
                <input
                type="text"
                className="form-control"
                placeholder="First Name"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
                required
            />
            </div>
    
            <div className="mb-3">
                <label>Last Name</label>
                <input
                type="text"
                className="form-control"
                placeholder="Last Name"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
                required
            />
            </div>
    
            <div className="mb-3">
                <label>Email Address</label>
                <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            </div>
    
            <div className="mb-3">
                <label>Password</label>
                <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            </div>
    
            <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                    Sign up
                </button>
            </div>
            <p className="forgot-password text-right">
                Already registered ? <a href="/Login">Login</a>
            </p>
        </form>
    );
}

export default Register