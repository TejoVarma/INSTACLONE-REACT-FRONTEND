import React from "react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { List } from "../components/Context";
import { newPost } from "../utils/data";

export default function NewPostForm(){
    const [formData, setFormData] = useState({
        image : "",
        author : "",
        location : "",
        description : ""
    });
    const [disabled,setDisabled] = useState(false)
    const {addNewPost} = useContext(List);
    const navigate = useNavigate();
    function formSubmit(e) {
        e.preventDefault();
        setDisabled(true);
        const post = new FormData(e.target);
        post.append("date", new Date().toDateString());
        post.append("likes", 0);
        post.append("id", Date.now());
        
        newPost(post)
        .then((res) => {
            if(res.status === "Success") {
                addNewPost(res.result)
                setFormData({
                    image : "",
                    author : "",
                    location : "",
                    description : ""
                });
                setDisabled(false);
                navigate("../all");
            } else {
                alert("Failed to create post, try again...")
            }
            
        })
    }
    return <>
        <div className="form-container">
            <form onSubmit={formSubmit}>
                <div className="field-container">
                    <input type={"file"} id="file" name="image" accept="image/*" required onChange={(e)=>{
                        setFormData(data =>{
                            return {
                                ...data,
                                image : e.target.files[0]
                            }
                        })
                    }}/>
                </div>
                <div className="field-container">
                    <input type={"text"} id="author" name="name" placeholder="Author" value={formData.author} maxLength = {15} required onChange={(e)=>{
                        setFormData(data=>{
                            return {
                                ...data,
                                author : e.target.value
                            }
                        })
                    }}/>
                    <input type={"text"} id="location" name="location" placeholder="Location" value={formData.location} maxLength = {20} required onChange={(e)=>{
                        setFormData(data => {
                            return {
                                ...data,
                                location : e.target.value
                            }
                        })
                    }}/>
                </div>
                <div className="field-container">
                    <input type={"text"} id="description" name="description" placeholder="Description" value={formData.description} required onChange={(e)=>{
                        setFormData(data=>{
                            return {
                                ...data,
                                description : e.target.value
                            }
                        })
                    }}/>
                </div>
                {
                    !disabled?
                    <div className="field-container">
                        <button className="submit-button" type={"submit"}>Post</button>
                    </div>:
                    <div className="uploading">
                        <p>Your post is being uploaded</p>
                    </div>
                }
            </form>
        </div>
    </>
}