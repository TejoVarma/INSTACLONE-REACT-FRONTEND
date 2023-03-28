import React, {createContext,useEffect, useState} from "react";
import { getPosts } from "../utils/data";

export const List = createContext();

export default function Context({children}){
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        getPosts()
        .then(res => {
            setPosts(res.result.reverse());
            // console.log(res.result);
        });
    }, []);
    return <List.Provider value={{
        posts : posts,
        addNewPost : (post) => {
            const newPost = [post, ...posts];
            setPosts(newPost);
        }
    }}>
        {children}
    </List.Provider>
}