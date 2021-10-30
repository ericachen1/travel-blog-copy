import React, {useState} from 'react'
import Post from './Post'
import './Feed.css'

const Feed = () => {
    const data = [{
        name: "tester",
        image: "https://media.istockphoto.com/photos/grand-prismatic-spring-picture-id899846654?b=1&k=20&m=899846654&s=170667a&w=0&h=ON3z2xYiGOzuVEqfqb8yt9roHdWfCTnip8O5ck3yPTI=",
        text: "tester",
    },
    {
    name: "Yellow Stone",
    image: "https://media.istockphoto.com/photos/yellowstone-falls-river-grand-canyon-national-park-montana-mt-picture-id154931596?b=1&k=20&m=154931596&s=170667a&w=0&h=MI90LXLguHIkCqijs40tRngRwtr2QjzhrV7YG_BVRhw=",
    text: "Splash",
    },
    ]; // use []; when more than one entry in the array
    
    const [posts, setPosts] = useState(data); // data rep by useState variable 
    const [location, setLocation] = useState('');
    const [imgURL, setImgURL] = useState('');
    const [text, setText] = useState('');

    const locationChangeHandler = (event) => {
        setLocation(event.target.value)
    }
    const URLChangeHandler = (event) => {
        setImgURL(event.target.value)
    }
    const textChangeHandler = (event) => {
        setText(event.target.value)
    }

    const addPosts = () => {
        const newPost = {name:location, image:imgURL, text:text}
        console.log(newPost);
        setPosts([newPost, ...posts]) // new posts and everything else in the post
        console.log(posts)
    }

    return (
        <div className="feed">
            <div className="newPost">
                <h2>Add new post</h2>
                <label>Location</label>
                <input onChange={locationChangeHandler}></input>
                <label>Image URL</label>
                <input onChange={URLChangeHandler}></input>
                <label>Text</label>
                <input onChange={textChangeHandler}></input>
            </div>
            <button onClick={addPosts}>Add post</button>

            {posts.map((location) => (
                <Post name={location.name} image={location.image} text={location.text}/>
            ))}
        </div>
    )
}

export default Feed
