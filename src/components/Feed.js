import React, {useState} from 'react'
import Post from './Post'
import './Feed.css'

const Feed = () => {
    const data = [{
        name: "La Mapa de Corona, Queens",
        image: "https://si.wsj.net/public/resources/images/NY-DT765_NYOPEN_16U_20151015190030.jpg",
        text: "",
    },
    {
        name: "image of 1800s street of Corona",
        image: "https://www.bygonely.com/wp-content/uploads/2020/11/featured_Corona_Queens_New_York_City_1982.jpg",
        text: "",
    },
    { 
        name: "mural & community activity",
        ihttps:"//assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvYXNzZXRzLzQwM2M0OGVhLTk5MTAtNDAzZi1hZmQwLTIzYmU2NDA0MzgyZWQwMzY5NGQxNWQ2MjhiOTJlZl9HZXJhZGEtQXJ0LTIyMyBob3Jpem9udGFsLmpwZyJdLFsicCIsImNvbnZlcnQiLCIiXSxbInAiLCJjb252ZXJ0IiwiLXF1YWxpdHkgODEgLWF1dG8tb3JpZW50Il0sWyJwIiwidGh1bWIiLCIxMjgweD4iXV0/Gerada-Art-223%20horizontal.jpg",
        text: "",
    },
    {
        name: "Abandoned Tiffany Factory",
        image: "https://forgotten-ny.com/wp-content/uploads/2013/03/tiffany.jpg",
        text: "",
    },
    {
        name: "hall of science museum",
        image: "https://tile.loc.gov/image-services/iiif/service:pnp:highsm:31200:31263/full/pct:50/0/default.jpg",
        text: "",
    },
    {
        name: "flushing meadows corona park",
        image: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/flushing-meadows-park-unisphere-christina-martinez.jpg",
        text: "",
    },
    {
        name: "theater",
        image: "http://photos.cinematreasures.org/production/photos/141691/1446412120/large.png?1446412120",
        text: "",
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
