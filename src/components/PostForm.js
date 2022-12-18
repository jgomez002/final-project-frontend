import React, { useEffect,useState } from 'react';
import { getStorage, ref, getDownloadURL } from "firebase/storage";




function PostForm({caption, userId, userName, imageSrc, date,imageAlt }) {
    // working image / file upload code
    const [fileUploaded, setfileUploaded] = useState();

    useEffect(() => {
        const storage = getStorage();
        getDownloadURL(ref(storage, "images/" +imageSrc))
        .then((url) => {
            setfileUploaded(url);
        });
        
    },[imageSrc]);
    return(
        <>
        <div className="Post">
            <img src={fileUploaded} alt={imageAlt}/>
            <p>Insert "{imageSrc}" Here</p>
            <p className="Caption">{caption}</p>
            <p className="Date"> @{userName} Archived: <b> {date}</b></p>
            <p> @{userName}</p>
        </div>
        </>
    );
}

export default PostForm;