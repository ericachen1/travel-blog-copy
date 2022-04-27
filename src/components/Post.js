import React from 'react'

const Post = (props) => {
    return (
        <div className="post">
            <h2> {title} </h2>
            <p> {artist} </p>
            <p> {props.name} </p>
            <img src={props.image} alt="blog location"></img>
            <img src="https://mail.google.com/mail/u/1?ui=2&ik=48a6161404&attid=0.1&permmsgid=msg-a:r-4624192364837504157&th=18029ba2b0c10bae&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ-lVvXqUtVj27b4kbcAXN_ihkN36PnacDAfHah9FdC8qFCoGEPJpMfdKzVIzVqhO_mzBwCCgj34dlosv9aZ0Uxho5dEbbqavD6iOLc2agPTLXtRyA7B0QUyFE4&disp=emb&realattid=18029ba1a275c47d12b3" alt="current state of One Time Square"></img>
            <iframe width="420" height="315" src="https://www.youtube.com/watch?v=gfNW5oC0b3k"></iframe>
            <p> {type} </p>
            <p> {text} </p>
            <p> {year} </p>
            <p> {style} </p>
            <p> {justification} </p>
            <p> {contexto} </p>
            <p> {conexion} </p>
        </div> 
    )
}

export default Post
