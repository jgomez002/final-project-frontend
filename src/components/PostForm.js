import React from 'react';



function PostForm({caption, userId, userName, imageSrc, date }) {
    // working image / file upload code
    // const [fileUploaded, setfileUploaded] = useState();

    // useEffect(() => {
    //     const storage = getStorage();
    //     getDownloadURL(ref(storage, "images/" +fileSrc))
    //     .then((url) => {
    //         setfileUploaded(url);
    //     });
        
    // },[fileSrc]);
    return(
        <>
        <div className="Post">
            {/* <img src={fileUploaded}/> */}
            <p>Insert "{imageSrc}" Here</p>
            <p className="Caption">{caption}</p>
            <p className="Date">Archived: <b> {date}</b></p>
            <p> @{userName}</p>
        </div>
        </>
    );
}

export default PostForm;