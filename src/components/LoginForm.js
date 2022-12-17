import React from "react";

function LoginForm({loginUser}){
    return (
        <form className="FormElement" onSubmit={(e)=> loginUser(e)}> 
            <div className="FormElement-login">
            <label htmlFor="email">Email </label>
            <input type="text" name ="email" /> 
            </div>
            <div className="FormElement-login">
            <label htmlFor= "password">Password</label>
            <input type="password" name ="password" /> 
            </div>
            <div className="FormElement-login">
            <button type="submit">Submit</button> 
            </div>
        </form> 
    ); 
}

export default LoginForm; 
