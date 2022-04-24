import React, {useState} from 'react'
import Post from './Post'
import './Feed.css'

const Feed = () => {
    const data = [{
    // audioguide
        type: "mural de vinilo",
        name: "One Time Square",
        image: "https://i0.wp.com/gothamtogo.com/wp-content/uploads/2019/08/Domingo-Zapata-Mural-in-Times-Square.jpeg?ssl=1",
        title: "Life is a Dream",
        artist: "Domingo Zapata",
        text: " 33,000 square feet tall",
        year: "2019",
        style: "Moderno",
        justification: "",
    },
    { // audioguide
        type: "mural de vinilo",
        name: "",
        image: "https://streetartnyc.org/wp-content/uploads/2017/12/demsky-street-art-queens-nyc.jpg",
        title: "",
        artist: "J Demsky",
        text: "",
        year: "",
        style: "",
        justification: "",
    },
    { // audioguide
        type: "sculptura",
        name: "Museo y Biblioteca de la Hispanic Society",
        image: "https://www.pablopicasso.org/images/paintings/avignon.jpg",
        title: "Les Demoiselles d'Avignon",
        artist: "Manuel Chili (Caspicara)",
        text: "",
        year: "1907",
        style: "Cubismo",
        justification: "",
    },

    ]; // use []; when more than one entry in the array
    
    const [posts, setPosts] = useState(data); // data rep by useState variable 
    
    const [type, setType] = useState('');
    const [location, setLocation] = useState('');
    const [imgURL, setImgURL] = useState('');
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [text, setText] = useState('');
    const [year, setYear] = useState('');
    const [style, setStyle] = useState('');
    const [justification, setJustification] = useState('');

    const typeChangeHandler = (event) => {
        setType(event.target.value)
    }
    const locationChangeHandler = (event) => {
        setLocation(event.target.value)
    }
    const URLChangeHandler = (event) => {
        setImgURL(event.target.value)
    }
    const titleChangeHandler = (event) => {
        setTitle(event.target.value)
    }
    const artistChangeHandler = (event) => {
        setArtist(event.target.value)
    }
    const textChangeHandler = (event) => {
        setText(event.target.value)
    }
    const yearChangeHandler = (event) => {
        setYear(event.target.value)
    }
    const styleChangeHandler = (event) => {
        setStyle(event.target.value)
    }
    const justificationChangeHandler = (event) => {
        setJustification(event.target.value)
    }

    const addPosts = () => {
        const newPost = {
            type: type,
            name: location,
            image: imgURL,
            title: title,
            artist: artist,
            text: text,
            year: year,
            style: style,
            justification: justification,    
        }
        console.log(newPost);
        setPosts([newPost, ...posts]) // new posts and everything else in the post
        console.log(posts)
    }

    return (
        <div className="feed">
            <div className="newPost">
                <h2>Add new post</h2>

                <label>Tipo de obra</label>
                <input onChange={typeChangeHandler}></input>

                <label>Localización</label>
                <input onChange={locationChangeHandler}></input>

                <label>Imagen</label>
                <input onChange={URLChangeHandler}></input>

                <label>Título de la obra</label>
                <input onChange={titleChangeHandler}></input>
                
                <label>Artista</label>
                <input onChange={artistChangeHandler}></input>
                
                <label>Descripción</label>
                <input onChange={textChangeHandler}></input>

                <label>Año</label>
                <input onChange={yearChangeHandler}></input>
                
                <label>Estilo</label>
                <input onChange={styleChangeHandler}></input>

                <label>Justificación</label>
                <input onChange={justificationChangeHandler}></input>
                
            </div>
            <button onClick={addPosts}>Add post</button>

            {posts.map((location) => (
                <Post 
                name={location.name} 
                image={location.image} 
                text={location.text}
                type={location.type}
                title={location.title}
                artist={location.artist}
                year={location.year}
                style={location.style}
                justification={location.justification}
                />
            ))}
        </div>
    )
}

export default Feed
