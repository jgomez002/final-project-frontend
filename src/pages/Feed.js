import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import PostForm from "../components/PostForm"
import { getFirestore,collection, getDocs } from "firebase/firestore";

const queryData = async (app) => {
    if (!app) return [];
    const db = getFirestore(app);
    const data = [];
    const querySnapshot = await getDocs(collection(db, "posts"));
    querySnapshot.forEach((doc) => {
        data.push(doc.data());
    });
    return data;
};

function Feed({
    app,
    isLoading,
    isLoggedIn,
    setLoggedIn, 
    setUserInformation,
    userInformation
}) {
    const navigate = useNavigate();
    const [postData, setPostData] = useState([]);

     useEffect(()=> {
        if(!isLoggedIn && !isLoading) navigate("/login");
    }, [isLoading, isLoggedIn, navigate]); 

    useEffect(() => {
        if(!app) return;
        queryData(app).then(setPostData);
    }, [app]);

    console.log({postData});


    return(
        <>
    <Header isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} setUserInformation= {setUserInformation}/> 
            <div className="PageWrapper">
            {postData.map((post,index) => (
            <div className="Post-wrapper postFrame">
            <PostForm
            caption={post.caption}
            // imageAlt={post.imageAlt}
            imageSrc={post.imageSrc}
            // videoSrc={post.videoSrc}
            date={post.date}
            userName={post.userName}
            />
            </div>
            ))}
        </div>  
        </>
    );
    }

export default Feed;