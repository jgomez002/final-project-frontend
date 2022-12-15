import React from "react";
import { Link } from "react-router-dom";

function PostForm({caption, userId, userName, imageSrc, imageAlt, videoSrc, date }) {
    return(
        <>
        <div className="Post">
            <img src={imageSrc} alt={imageAlt}/>
            <video src={videoSrc}/>
            <p>{videoSrc}</p>
            <p className="Caption">{caption}</p>
            <p className="Date">{date}</p>
            <p> @{" "} 
            <Link to={`user/${userId}`}>{userName}</Link></p>
        </div>
        </>
    );
}

export default PostForm;