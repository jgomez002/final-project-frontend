import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { Link } from "react-router-dom";

function Header({isLoggedIn, setIsLoggedIn, setUserInformation}){
    function logout(){
        const auth= getAuth();
        signOut(auth)
            .then(()=> {
                setUserInformation({});
                setIsLoggedIn(false);
            })
            .catch((error)=> {
                console.warn(error);
            });
        }

    return(
        <header>
          <h3 style={{textAlign:"left"}}>The Archive(s)</h3>
        <nav className="header">
            {!isLoggedIn && (<Link to ="/login">
              <p> Login</p>
            </Link>
            )}

            {!isLoggedIn && (<Link to="/create">
              <p>Create User</p>
            </Link>
            )}

            {isLoggedIn && (<Link to="/feed">
              <p>Feed</p>
            </Link>
            )}

            {/* {isLoggedIn && (<Link to="/shared-archives">
              <p>Shared Archives</p>
            </Link>
            )}   */}
             {isLoggedIn && (<Link to="/create-post">
              <p>Create Post</p>
            </Link>
            )}  
            {isLoggedIn && (<Link to="/">
              <p> My Profile</p>  
            </Link>
            )}

            {isLoggedIn && <p onClick= {() => logout()}>Log Out</p>}
        </nav>
        </header>
    ); 
    }

export default Header; 