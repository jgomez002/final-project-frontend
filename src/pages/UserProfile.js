import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

function UserProfilePage({
    isLoading,
    isLoggedIn,
    setLoggedIn, 
    setUserInformation,
    userInformation
}) {
    const navigate = useNavigate();

     useEffect(()=> {
        if(!isLoggedIn && !isLoading) navigate("/login");
    }, [isLoading, isLoggedIn, navigate]); 

    return(
        <>
    <Header isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} setUserInformation= {setUserInformation}/> 
            <div className="Post-wrapper">
            <h1> User Profile</h1>
            <p> Hey, <strong>{userInformation.displayName} </strong> here's your user info</p>    
            <p><strong> Email: </strong>{userInformation.email}</p>
            <br></br>
            <div>
            <p><strong>Your Post</strong>
            {userInformation.password}</p>
            </div>
        </div>  
        <div></div>
        </>
    );
}

export default UserProfilePage;