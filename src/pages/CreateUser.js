import React, {useCallback,useEffect, useState} from "react";
import {useNavigate} from "react-router";
import {getAuth, createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import CreateUserForm from "../components/CreateUserForm";
import Header from "../components/Header";
import { Link } from "react-router-dom";




function CreateUserPage({isLoggedIn, setIsLoggedIn,setUserInformation}){
    const [errors,setErrors]=  useState();
    const navigate = useNavigate();

    useEffect(()=> {
        if(isLoggedIn) navigate("/");
    }, [isLoggedIn, navigate]); 


    const signUpUser= useCallback(
        (e) => {
            e.preventDefault();
            const email= e.currentTarget.email.value; 
            const password=e.currentTarget.password.value; 
            const name =e.currentTarget.name.value
            const auth= getAuth(); 



createUserWithEmailAndPassword(auth,email, password)
    .then((userCredential)=> {
        const user= userCredential.user;
        setIsLoggedIn(true); 
        setUserInformation({
            email: user.email,
            displayName: user.displayName, 
            uid:user.uid,
            accessToken:user.accessToken,
        }); 
        setErrors();
        updateProfile(user,{displayName: name})
        .then(res => console.log(res))
        .catch(err => console.warn(err));
    })
    .catch((error)=> {
        const errorCode= error.code;
        const errorMessage= error.message; 
        console.warn({error, errorCode, errorMessage});
        setErrors(errorMessage);
    });
},
    [setErrors, setIsLoggedIn, setUserInformation]
); 

return(
    <>
    <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setUserInformation= {setUserInformation}/> 
    <div className="PageWrapper">
        <h1> Create User</h1>
        <CreateUserForm signUpUser={signUpUser} /> 
        <p>{errors}</p>
        <Link to="/login"> Login </Link>
    </div>
    </>
);
}
export default CreateUserPage;  