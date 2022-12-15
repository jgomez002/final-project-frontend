import { createBrowserRouter, RouterProvider} from "react-router-dom";
import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
// styles & components
import "./App.css";
import CreateUserPage from "./pages/CreateUser";
import LoginPage from "./pages/Login";
import UserProfilePage from "./pages/UserProfile";
import SharedArchives from "./pages/SharedArchives";
import CreatePost from "./pages/CreatePost"
import Feed from "./pages/Feed";

const firebaseConfig = {
  apiKey: "AIzaSyDeHVZLjV1sKbePkDKF-8OnDCor9P5X4Tk",
  authDomain: "final-project-66792.firebaseapp.com",
  projectId: "final-project-66792",
  storageBucket: "final-project-66792.appspot.com",
  messagingSenderId: "121899551734",
  appId: "1:121899551734:web:152db1c58e5166afe495d7"
};

function App() {
const [appInitialized, setappInitialized] = useState ();
const [isLoading, setIsLoading] = useState (true);
const [isLoggedIn, setIsLoggedIn] = useState (false);
const [userInformation, setUserInformation] = useState ({});
console.log({userInformation})
//ensure app is initialized when its ready to be
  useEffect(()=> {
//Initialized Firebase
const app = initializeApp(firebaseConfig);
    setappInitialized(app);
  },[]);
  //Checks to see if user is logged in
  //user loads page, check their status
  //set state accordingly
  useEffect(() => {
    if(appInitialized) {
      const auth = getAuth();
      onAuthStateChanged(auth,(user)=>{
        if (user){
          //User is signed in, see docs for a list of available properties
          setUserInformation(user);
          setIsLoggedIn(true);
        }else{
          //User is signed out
          setUserInformation({});
          setIsLoggedIn(false);
        }
        //Whenever state changes setLoading to False
        setIsLoading(false);
      });
    }
  },[appInitialized]);

  console.log({userInformation});

  const router = createBrowserRouter([
    {
      path: "/",
      element: <UserProfilePage
      isLoading={isLoading}
      setIsLoggedIn={setIsLoggedIn}
      setUserInformation={setUserInformation}
      isLoggedIn= {isLoggedIn}
      userInformation={userInformation}
      />,
    },
    {
      path: "/login",
      element: <LoginPage 
      setIsLoggedIn={setIsLoggedIn}
      setUserInformation={setUserInformation}
      isLoggedIn= {isLoggedIn}
      />,
    },
    {
      path: "/create",
      element: <CreateUserPage 
        setIsLoggedIn={setIsLoggedIn}
        setUserInformation={setUserInformation}
        isLoggedIn= {isLoggedIn}
        />,
    },
    {
      path: "/shared-archives",
      element: <SharedArchives 
      isLoading={isLoading}
      setIsLoggedIn={setIsLoggedIn}
      setUserInformation={setUserInformation}
      isLoggedIn= {isLoggedIn}
      userInformation={userInformation}
        />,
    },
    {
      path: "/feed",
      element: <Feed 
      app = {appInitialized}
      isLoading={isLoading}
      setIsLoggedIn={setIsLoggedIn}
      setUserInformation={setUserInformation}
      isLoggedIn= {isLoggedIn}
      userInformation={userInformation}
        />,
    },
    {
      path: "/create-post",
      element: <CreatePost 
      app= {appInitialized}
      isLoggedIn= {isLoggedIn}
      isLoading = {isLoading}
      userInformation= {userInformation}
      setIsLoggedIn={setIsLoggedIn}
      setUserInformation={setUserInformation}
        />,
    },
  ]);

  return (
    <div className="App">
    <RouterProvider router={router} />
    </div>
  );
}


export default App;