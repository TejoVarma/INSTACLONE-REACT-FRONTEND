import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
export default function PostView({user}){
    const navigate = useNavigate();
    return <section className="container">
        <header className="header">
            <img className="icon" src="/icon.jpg" alt="" onClick={()=> navigate("all")}/>
            <h1 className="header-text">InstaClone</h1>
            <div>
                <Link to={"newpost"}>
                    <img className="camera" src="/camera.png" alt=""/>
                </Link>
            </div>
        </header>
        <div className="posts-view">
            <Outlet/>
        </div>
    </section>
}

