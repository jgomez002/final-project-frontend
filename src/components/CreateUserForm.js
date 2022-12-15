import React from "react"

function CreateUserForm({signUpUser}){
    return (
        <form className="FormElement" onSubmit={(e)=> signUpUser(e)}>
            <label htmlFor="name">User Name </label>
            <input type="text" name ="name" /> 
            <label htmlfor="email">Email </label>
            <input type="email" name ="email" /> 
            <label htmlfor="password">Password </label>
            <input type="password" name ="password" /> 
            <button type="submit">Submit</button> 
        </form> 
    ); 
}

export default CreateUserForm; 