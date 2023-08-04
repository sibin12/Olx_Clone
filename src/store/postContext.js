import {createContext, useState} from 'react'

export const PostContext = createContext(null);
console.log(PostContext+"postcontext console");

function Post ({children}) {
const [postDetails, setPostDetails] = useState()
{console.log(postDetails)}
return(
        

        <PostContext.Provider value={{postDetails,setPostDetails}}>
            {children }
        </PostContext.Provider>
    )
   
}

export default Post;