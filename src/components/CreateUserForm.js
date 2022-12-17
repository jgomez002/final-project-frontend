import React from "react"

function CreateUserForm({signUpUser}){
    return (
        <form className="FormElement" onSubmit={(e)=> signUpUser(e)}>
            <label htmlFor="name">User Name </label>
            <input type="text" name ="name" /> 
            <br></br>
            <label htmlfor="email">Email </label>
            <input type="email" name ="email" /> 
            <br></br>
            <label htmlfor="password">Password </label>
            <input type="password" name ="password" /> 
            <br></br>
            <button type="submit">Submit</button> 
        </form> 
    ); 
}

export default CreateUserForm; 