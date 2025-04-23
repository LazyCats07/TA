import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";

function Profile() {
    const [userDetails, setUserDetails] = useState(null);
    const fetchUserDetails = async () => {
        auth.onAuthStateChanged(async (user) => {
            console.log(user);
            setUserDetails(user);
            const docRef = doc(db, "Users", user.uid);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setUserDetails(docSnap.data());
                console.log(docSnap.data());
            } else {
                console.log("User is not Logged in");
            }
        })
    }

    useEffect(() => {
        fetchUserDetails();
    }, []);

    // Logout
    async function handleLogout() {
        try {
            await auth.signOut();
            window.location.href = "/Login";
            toast.success("User logged out successfully", {
                position: "top-center",
            });
            window.location.href = "login";
        } catch (error) {
            console.log("Error logging out:", error.message);
        }
    }
    
    // return (
    //     <div>
    //         {userDetails ? (
    //             <div>
    //                 <img src= {userDetails.photoURL} 
    //                 width={"40%"}
    //                 style={{ borderRadius: "50%" }}
    //                 />
    //                 <h3>Welcome {userDetails.firstName} 🙏🙏</h3>
    //                 <div>
    //                     <p>Email: {userDetails.email}</p>
    //                     <p>First Name: {userDetails.firstName}</p>
    //                     <p>Last Name: {userDetails.lastName}</p>
    //                 </div>
    //                 <button className="btn btn-primary" onClick={handleLogout}>
    //                     Logout
    //                 </button>
    //             </div>
    //         ) : (
    //             <p>Loading...</p>
    //         )}
    //     </div>
    // );
}

export default Profile;
