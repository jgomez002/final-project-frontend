import React, { useCallback,useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import CreatePostForm from "../components/CreatePostForm";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import {getStorage, ref, uploadBytes} from "firebase/storage"

function CreatePost({
    app,
    isLoading, 
    isLoggedIn, 
    userInformation, 
    setIsLoggedIn, 
    setUserInformation}) {
       
    const navigate = useNavigate();
    const [postSucessful, setPostSucessful] = useState(false);
   
    const createPost= useCallback(
        async (e) => {
            e.preventDefault();
            const db = getFirestore(app);
            const storage = getStorage()   


            const caption = e.currentTarget.caption.value;
            const userName = userInformation.displayName;
            const userId = userInformation.uid;
            const date = e.currentTarget.date.value;
            // const imageSrc = ""//e.currentTarget.date.value;
            // const videoSrc = ""//e.currentTarget.date.value;  
            const fileUpload = e.currentTarget.fileUpload.files[0];
            const fileRef = ref(storage, 'images/' + fileUpload.name);
            console.log(fileRef);

            try {

                await uploadBytes(fileRef, fileUpload).then(
                    (snapshot) => {
                        console.log("Uploaded a blob or file!", snapshot);
                        return snapshot;
                    }
                );

            ///Atttenmpt to upload files, in the works :(
            //  uploadBytes(fileRef, fileUpload).then((snapshot) => {
            //     console.log('Uploaded a blob or file!');
            // alert("MAYVE!??!")
            // return snapshot;
            //   });

            //  getDownloadURL(ref(fileRef))
            // .then((url) => {
            //   // `url` is the download URL for 'images/stars.jpg'
          
            //   // This can be downloaded directly:
            //   const xhr = new XMLHttpRequest();
            //   xhr.responseType = 'blob';
            //   xhr.onload = (event) => {
            //     const blob = xhr.response;
            //   };
            //   xhr.open('GET', url);
            //   xhr.send();
            //   alert("OMGGG")
          
            // })
            // .catch((error) => {
            //   // Handle any errors
            // });
        
                const docRef = await addDoc(collection(db, "posts"), {
                    caption, 
                    userId,
                    userName,
                    date,
                    imageSrc: fileUpload.name,
                });
                console.log("Document written with ID: ", docRef.id);
                setPostSucessful(true);
            } catch (e) {
                console.error("Error adding document, ", e);
            }
    }, [app, userInformation]);

    console.log(userInformation)
    
    useEffect(() => {
        if(postSucessful) return navigate('/feed');
    }, [postSucessful, navigate]);

    return(
        <>
        <div className="bgImg PageWrapper-other">
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setUserInformation= {setUserInformation}/> 
        <div className="Post-wrapper">
            <h1>Create an <b>Archive</b></h1>
            <CreatePostForm
             createPost={createPost} />
            {postSucessful && <p>Yay, look at ur feed for new post!!</p>}
        </div>
        </div>
        </>
    );
}

export default CreatePost;
