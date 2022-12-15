import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

function SharedArchives({
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
            <div className="PageWrapper">
            <h1> This will be where users can acess Shared Archives with friends </h1>
            <p><strong> Display Name: </strong>{userInformation.displayName}</p>
            <p><strong> Email: </strong>{userInformation.email}</p>
        </div>  
        <div></div>
        </>
    );
    }

export default SharedArchives;