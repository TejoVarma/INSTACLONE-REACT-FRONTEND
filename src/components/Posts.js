import React from "react";
import { BsHeart } from "react-icons/bs";
import { IoMdPaperPlane } from "react-icons/io"
export default function Posts({ post }) {
    const { name, location, likes, description, date, image } = post
    return <>
        <div className="posts">
            <header className="posts-header">
                <div className="info">
                    <p className="name">{name}</p>
                    <p className="location">{location}</p>
                </div>
                <div className="more">
                    <div className="options">...</div>
                </div>
            </header>
            <section className="image">
                <img className="post-image" src={`https://instaclone-nodejs-knen.onrender.com/${image}`} alt=""></img>
            </section>
            <footer className="footer">
                <div className="likes-info">
                    <div className="like-section">
                        <div className="like-share">
                            <div className="like">
                                <div><BsHeart /></div>
                            </div>
                            <div className="share">
                                <div><IoMdPaperPlane /></div>
                            </div>
                        </div>
                        <div className="like-counter">{`${likes} likes`}</div>
                    </div>
                    <div className="date">{date}</div>
                </div>
                <div className="description">
                    {description}
                </div>
            </footer>
        </div>
    </>
}