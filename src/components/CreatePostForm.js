import React from "react"


function CreatePostForm({createPost}){
 
    
    return (
        <form className="FormElement" onSubmit={(e)=> createPost(e)}>
            <label htmlFor="caption">Caption</label>
            <input type="text" name ="caption" /> 

            <label htmlFor="date">Date</label>
            <input type="date" name ="date" /> 
            
            <label htmlFor="fileUpload">Upload!</label>
            <input 
            type="file" 
            name ="fileUpload"
            multiple="multiple" 
            /> 

            

            <button type="submit">Submit</button> 
        </form> 
    ); 
}

export default CreatePostForm; 

// accept="image/png, image/jpeg, image/jpg, image/gif"