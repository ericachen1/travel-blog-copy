import React from 'react'

const Post = (props) => {
    return (
        <div className="post">
            <h2> {props.name} </h2>
            <img src={props.image} alt="blog location"></img>
            <p> {props.text} </p>
        </div> 
    )
}

export default Post
