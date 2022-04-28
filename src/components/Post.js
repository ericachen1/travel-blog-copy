import React from 'react'

const Post = (props) => {
    return (
        <div className="post">
            <h1></h1>
            <img src={props.image} alt="ART"></img> 
            <h2> {props.title} </h2>
            <p> {props.artist} </p>
            <h3> {props.name} </h3>
            <p> {props.year} </p>
            <p> {props.style} </p>
            <p> {props.type} </p>
            
            <p> {props.justification} </p>
            <p> {props.contexto} </p>
            <p> {props.conexion} </p>

            <iframe width="420" height="315" src={props.text} ></iframe>

        </div> 
    )
}

export default Post
