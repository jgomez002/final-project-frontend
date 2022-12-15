import React from "react"

function CreatePostForm({createPost}){
    return (
        <form className="FormElement" onSubmit={(e)=> createPost(e)}>
            <label htmlFor="caption">Image Caption </label>
            <input type="text" name ="caption" /> 
            <label htmlFor="imageAlt">Image Alt Text </label>
            <input type="text" name ="imageAlt" /> 
          
            <button type="submit">Submit</button> 
        </form> 
    ); 
}

export default CreatePostForm; 