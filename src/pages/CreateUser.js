import React, {useCallback,useEffect, useState} from "react";
import {useNavigate} from "react-router";
import {getAuth, createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import CreatePostForm from "../components/CreatePostForm";
import Header from "../components/Header";
import { Link } from "react-router-dom";

function CreatePostPage({isLoggedIn, setIsLoggedIn,setUserInformation}){
    const [errors,setErrors]=  useState();
    const navigate = useNavigate();

   
return(
    <>
    <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setUserInformation= {setUserInformation}/> 
    <div className="PageWrapper">
        <h1> Create Post</h1>
        <CreatePostForm/> 
        <p>{errors}</p>
    </div>
    </>
);
}
export default CreatePostPage;  