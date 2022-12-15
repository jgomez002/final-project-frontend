import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import CreatePostForm from "../components/CreatePostForm";

function CreatePost({
    isLoading, 
    isLoggedIn, 
    userInformation, 
    setIsLoggedIn, 
    setUserInformation}) {
       
    const navigate = useNavigate();
    
    useEffect(() => {
        if(!isLoggedIn && !isLoading) return navigate('/login');
    }, [isLoading, isLoggedIn, navigate]);

    return(
        <>
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setUserInformation= {setUserInformation}/> 
        <div className="Post-wrapper">
            <h1>Create Post</h1>
            <CreatePostForm/>
        </div>
        </>
    );
}

export default CreatePost;