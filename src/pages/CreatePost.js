import React, { useCallback,useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import CreatePostForm from "../components/CreatePostForm";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import {getStorage, ref, uploadBytes, getDownloadURL, uploadBytesResumable} from "firebase/storage"
import { async } from "@firebase/util";


// function FileToUpload() {
//     if (fileToUpload == null) return;

//     const [fileUrls, setFileUrls] = useState([]);        

     
//     const fileRef = ref(storage, `${fileToUpload.name()}`);
//     const fileUpload = e.currentTarget.fileUpload.files[0];

//     const fileUploaded = 
//              uploadBytes(fileRef, fileUpload).then(
//                 (snapshot) => {
//                     console.log("Uploaded a blob or file!", snapshot);
//                     alert("FINALLy");
//                     return snapshot;
//                     }
//                 )
//                 getDownloadURL(snapshot.ref).then ((url)=>{
//                 setFileUrls((prev) => [...prev, url]);
            
//      });
//      console.log({fileUploaded})


// };

function CreatePost({
    app,
    isLoading, 
    isLoggedIn, 
    userInformation, 
    setIsLoggedIn, 
    setUserInformation}) {
       
    const navigate = useNavigate();
    const [postSucessful, setPostSucessful] = useState(false);
    // //for file upload
    // const [fileUrls, setFileUrls]= useState([]); 
    // const [fileUpload, setFileUpload] =useState(null)

  


    // // const [uploadFile, setUploadFile] = useState(null);
    // const [fileUrls, setFileUrls] = useState([]);    
    
    // if (fileUpload == null) return;

    // const [fileUrls, setFileUrls] = useState([]);        

     
    // const fileRef = ref(storage, `${fileToUpload.name()}`);
    // const fileUpload = e.currentTarget.fileUpload.files[0];

    // const fileUploaded = 
    //          uploadBytes(fileRef, fileUpload).then(
    //             (snapshot) => {
    //                 console.log("Uploaded a blob or file!", snapshot);
    //                 alert("FINALLy");
    //                 return snapshot;
    //                 }
    //             )
    //             getDownloadURL(snapshot.ref).then ((url)=>{
    //             setFileUrls((prev) => [...prev, url]);
            
    //  });
    //  console.log({fileUploaded})

//     const uploadFile = useCallback(
//         async(e) => {
//         e.preventDefault();
//         const db = getFirestore(app);
//         const storage = getStorage()  


//         const fileUpload = e.currentTarget.fileUpload.files[0];
//         const fileRef = ref(storage, `${fileUpload.name}`);
            
//         if (fileUpload == null) return;
//         uploadBytes(fileRef, fileUpload).then((snapshot) => {
//         getDownloadURL(snapshot.ref).then ((url)=>{
//         setFileUrls((prev) => [...prev, url]);
//         alert("PLEASEEEE")
//         });
//     });
//     try{
//         const docRef = await addDoc(collection(db, "posts"), {
//         fileUrls,
//          } )}
//          catch (e) {
//             console.error("Error adding document, ", e);
//         }
//         alert("PLEASEEEE")
// });
   
   
    const createPost= useCallback(
        async (e) => {
            e.preventDefault();
            const db = getFirestore(app);
            const storage = getStorage()   


            const caption = e.currentTarget.caption.value;
            const userName = userInformation.displayName;
            const userId = userInformation.uid;
            const date = e.currentTarget.date.value;
            const imageSrc = ""//e.currentTarget.date.value;
            const videoSrc = ""//e.currentTarget.date.value;  
            const fileUpload = e.currentTarget.fileUpload.files[0];
            const fileRef = ref(storage, `${fileUpload.name}`);


            try {
            //     const uploadFile = () =>{
            
            //         if (fileUpload == null) return;
            //         uploadBytes(fileRef, fileUpload).then((snapshot) => {
            //         getDownloadURL(snapshot.ref).then ((url)=>{
            //         setFileUrls((prev) => [...prev, url]);
            //     alert("PLEASEEEE")
            //         })
            //     });
            // }
            //  const uploadData = 
            //    await uploadBytes(fileRef, fileUpload).then(()=> {
            //         alert("OMGG")
            //     });
       
  
            //   `url` is the download URL for 'images/stars.jpg'
          
              // This can be downloaded directly:
            // const fileDataGet = await addDoc(collection(db, "posts"),{
            // imageSrc,
            // });
            // const uploadFileData =
            // await uploadBytesResumable(fileRef, fileUpload).then((snapshot) => {
            // console.log('Uploaded a blob or file!');
            // alert("MAYVE!??!")
            // return snapshot;
            // });

            // getDownloadURL(uploadFileData.snapshot.ref).then((downloadURL) => {
            //     console.log('File available at', downloadURL);
            // });
        

            //  await getDownloadURL(ref(fileRef))
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

            // uploadBytes(fileRef, fileUpload).then((snapshot) => {
            //     console.log('Uploaded a blob or file!');
            // alert("MAYVE!??!")
            // return snapshot;
            //   });
             uploadBytes(fileRef, fileUpload).then((snapshot) => {
                console.log('Uploaded a blob or file!');
            alert("MAYVE!??!")
            return snapshot;
              });

             getDownloadURL(ref(fileRef))
            .then((url) => {
              // `url` is the download URL for 'images/stars.jpg'
          
              // This can be downloaded directly:
              const xhr = new XMLHttpRequest();
              xhr.responseType = 'blob';
              xhr.onload = (event) => {
                const blob = xhr.response;
              };
              xhr.open('GET', url);
              xhr.send();
              alert("OMGGG")
          
            })
            .catch((error) => {
              // Handle any errors
            });

        

        
                const docRef = await addDoc(collection(db, "posts"), {
                    caption, 
                    userId,
                    userName,
                    date,
                    imageSrc: fileUpload.name,
                    videoSrc,
                });
                console.log("Document written with ID: ", docRef.id);
                setPostSucessful(true);
            } catch (e) {
                console.error("Error adding document, ", e);
            }
    }, [app, userInformation]);

    console.log(userInformation)
    
    useEffect(() => {
        if(!isLoggedIn && !isLoading) return navigate('/feed');
    }, [isLoading, isLoggedIn, navigate]);

    return(
        <>
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setUserInformation= {setUserInformation}/> 
        <div className="Post-wrapper">
            <h1>Create an <b>Archive</b></h1>
            <CreatePostForm
             createPost={createPost} />
            {postSucessful && <p>Yay, look at ur profile for new post!</p>}
        </div>
        </>
    );
}

export default CreatePost;

// useEffect(()=>{
//     const storage = getStorage(app)
//       setgetStorage(storage);
//   },[]);