import React, {createContext, useState} from "react";


export const List = createContext();

export default function Context({children}){
    const [posts, setPosts] = useState([]);
    return <List.Provider value={{
        addNewPost : (post) => {
            const newPost = [post, ...posts];
            setPosts(newPost);
        }
    }}>
        {children}
    </List.Provider>
}