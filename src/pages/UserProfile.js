import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { Link } from "react-router-dom";

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
      <div className="bgImg PageWrapper-other">
    <Header isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} setUserInformation= {setUserInformation}/> 
            <div className="Post-wrapper">
            <h1> User Profile</h1>
            <p> Hey, <strong>{userInformation.displayName} </strong> here's your user info</p>    
            <p><strong> Email: </strong>{userInformation.email}</p>
            <br></br>
            <div>
            <p><strong> <Link to="/create-post"> Create an Archive(s) </Link></strong>

           </p>
            </div>
        </div>  
        </div>
        </>
    );
}

export default UserProfilePage;