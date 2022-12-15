
import React, {useCallback, useEffect, useState} from "react"; 
import { useNavigate } from "react-router";
import LoginForm from "../components/LoginForm";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import backgroundVideo from "../bgVid.mp4"
import { Link } from "react-router-dom";



//background

function LoginPage({isLoggedIn, setIsLoggedIn, setUserInformation}) {
    const navigate = useNavigate();
    const [errors,setErrors]=  useState();

    useEffect(()=> {
        if(isLoggedIn) navigate("/");
    }, [isLoggedIn, navigate]); 


    const loginUser= useCallback(
        (e) => {
            e.preventDefault();
            const email= e.currentTarget.email.value; 
            const password=e.currentTarget.password.value; 

            const auth= getAuth(); 
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                const user= userCredential.user;
                setIsLoggedIn(true);

            setUserInformation({
                email: user.email,
                displayName: user.displayName, 
                uid:user.uid,
                accessToken:user.accessToken,
            }); 
        })
            .catch((error)=> {
                const errorCode= error.code;
                const errorMessage= error.message; 
                console.warn({error, errorCode, errorMessage});
                setErrors(errorMessage);
            });
        }, [setIsLoggedIn, setUserInformation]); 

    return(
        <>
    <div>
    <video autoPlay loop mute className="loginPage-backgroundVideo" preload="auto">
        <source src={backgroundVideo} type='video/mp4' />
    </video>
    </div>

            <div className="PageWrapper-Login">
              <h1> Archive(s)</h1>
              <div className="loginFrame">
              <LoginForm  loginUser={loginUser}/> 
              </div>
              <p>{errors}</p>
              <p>Don't have an Account?</p>
              <p> <Link to="/create">Create One!!</Link></p>
            </div>

        </>
    );
}

export default LoginPage; 