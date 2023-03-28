import React from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Landing from "../pages/Landing"
import NewPostForm from "../pages/NewPostForm"
import PostView from "../pages/PostsView"
import ViewPosts from "../pages/ViewPosts"

export default function Routers()
{
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="posts" element={<PostView/>}>
                <Route path="all" element={<ViewPosts/>}/>
                <Route path="newpost" element={<NewPostForm/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
}