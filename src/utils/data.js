const URL = "https://instaclone-nodejs-knen.onrender.com";

export function getPosts(){
    return fetch(`${URL}/posts`)
    .then(res=>res.json())
    .catch(err=>alert(err.message))
};

export function newPost(post){
    return fetch(`${URL}/post`,{
        method : "POST",
        body : post
    })
    .then(res=>res.json())
    .catch(err=>alert(err.message))
}