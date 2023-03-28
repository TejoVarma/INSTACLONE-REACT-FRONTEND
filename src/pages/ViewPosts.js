import React, { useContext } from "react";
import { List } from "../components/Context";
import Posts from "../components/Posts";

export default function ViewPosts(){
    const {posts} = useContext(List);
    return <>
        {posts.length === 0? <div className="emptyDB"><h2>Oops...Create new post by clicking on the camera button...</h2></div> : 
            posts.map(post => {
            return <Posts key={post._id} post={post}/>
        })}
    </>
}