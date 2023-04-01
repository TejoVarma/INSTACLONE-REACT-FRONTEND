import React, { useState, useEffect} from "react";
import Posts from "../components/Posts";
import { getPosts } from "../utils/data";

export default function ViewPosts(){
    let [posts,setPosts] = useState([]);
    useEffect(()=>{
        getPosts()
        .then(res => {
            setPosts(res.result.reverse());
            // console.log(res.result);
        });
    }, []);
    return <>
        {posts.length === 0? <div className="emptyDB"><h2>Oops...Create new post by clicking on the camera button...</h2></div> : 
            posts.map(post => {
            return <Posts key={post._id} post={post}/>
        })}
    </>
}