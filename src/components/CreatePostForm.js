import React from "react"

function CreatePostForm({createPost}){
    return (
        <form className="FormElement" onSubmit={(e)=> createPost(e)}>
            <label htmlFor="caption">Caption</label>
            <input type="text" name ="caption" /> 
            
            <label htmlFor="files">Upload!</label>
            <input 
            type="file" 
            name ="fileUpload"
            multiple="multiple" 
            accept="image/png, image/jpeg, image/jpg, image/gif"/> 
            

            <button type="submit">Submit</button> 
        </form> 
    ); 
}

export default CreatePostForm; 