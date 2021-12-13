import React, {useState} from 'react'
import Post from './Post'
import './Feed.css'

const Feed = () => {
    const data = [{
        name: "Un mapa de Corona, Queens",
        image: "https://si.wsj.net/public/resources/images/NY-DT765_NYOPEN_16U_20151015190030.jpg",
        text: "Este es el mapa de Corona, Queens. Corona es cuatrocientos trece (413.24) acres con dos millones cuatrocientos cinco mil cuatrocientos sesenta y cuatro (2,405,464) personas en 2020. Corona está al este de Jackson Heights y al oeste de Flushing. Corona está dos millas al norte de Forest Hills y seis al sur de East Elmhurst.",
    },
    {
        name: "Foto de una calle de los 1800 de Corona, Queens",
        image: "https://www.bygonely.com/wp-content/uploads/2020/11/featured_Corona_Queens_New_York_City_1982.jpg",
        text: "Esta es una imagen de la calle 108 en Corona, Queens. 108 calle en el centro de Corona, Queens. Este comunicado tiene un supermercado mexicano, una silla en frente al supermercado y un carro a la derecha del supermercado. Las casas están cerca del supermercado. Corona tiene muchos supermercados mexicanos.",
    },
    { 
        name: "El mural y las actividades en la comunidad ",
        ihttps:"//assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvYXNzZXRzLzQwM2M0OGVhLTk5MTAtNDAzZi1hZmQwLTIzYmU2NDA0MzgyZWQwMzY5NGQxNWQ2MjhiOTJlZl9HZXJhZGEtQXJ0LTIyMyBob3Jpem9udGFsLmpwZyJdLFsicCIsImNvbnZlcnQiLCIiXSxbInAiLCJjb252ZXJ0IiwiLXF1YWxpdHkgODEgLWF1dG8tb3JpZW50Il0sWyJwIiwidGh1bWIiLCIxMjgweD4iXV0/Gerada-Art-223%20horizontal.jpg",
        text: "Este es un mural de un médico durante la pandemia de coronavirus. Este mural está en el parque de la Corona de Flushing Meadows. Queens tiene menos camas que hospital que Manhattan pero Queens tiene (el doble) más personas que Manhattan. Muchas Mucho más personas viven en Corona pero no hay pocos PPE y camas de hospital.",
    },
    {
        name: "Fábrica Tiffany Abandonada",
        image: "https://forgotten-ny.com/wp-content/uploads/2013/03/tiffany.jpg",
        text: "Esta es la fábrica de lámparas de Tiffany en 43 avenida y 97 calle en Corona durante 1901 - 1932. Esta fábrica es roja y muy grande pero en la Gran Depresión la lámpara de Tiffany tiene menos negocios. En 2013, la fábrica está en construcción. Además, se construyó una nueva escuela llamada P.S. 315.         ",
    },
    {
        name: "El museo Hall of Science",
        image: "https://tile.loc.gov/image-services/iiif/service:pnp:highsm:31200:31263/full/pct:50/0/default.jpg",
        text: "Esta es la sala del museo de ciencias . En cinco años, este museo cumplirá sesenta años. La sala del museo de ciencias tiene 400 exhibiciones sobre matemáticas, ciencia, biología, química y física. Este museo es uno de los primeros museos que visito. Yo recomiendo el museo de matemáticas en Midtown, Manhattan. Una visita para estudiantes cuesta 18 dólares para una entrada es de 18 dineros pero este museo es NGO. El museo de matemáticas y la sala del museo de ciencias son similares porque la exhibición es muy interactiva.         ",
    },
    {
        name: "El Parque Flushing Meadows Corona",
        image: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/flushing-meadows-park-unisphere-christina-martinez.jpg",
        text: "Este es el parque de Flushing Meadows Corona. En 1939 años, Nueva York tiene un World Fair en este parque. 44 millones hombres, mujeres y niños fueron World 's Fair. Me gusta este parque porque las plantas son bonitas en abril. Yo recomiendo el parque de Flushing Meadows Corona para picnics con tu familia.         ",
    },
    {
        name: "El Cine",
        image: "http://photos.cinematreasures.org/production/photos/141691/1446412120/large.png?1446412120",
        text: "Esta es una imagen del teatro de Loew 's Plaza en el centro de Corona, Queens en National calle y Roosevelt Avenida en 1927. El Teatro de Loew 's Plaza es muy grande con dos pisos. Este teatro tiene dos mil ciento cincuenta y una (2,151) sillas. Pero en 2005, el teatro de Loew 's Plaza cerró. Por 78 años, muchas personas fueron al teatro a ver películas. Ahora este teatro es una farmacia Walgreens.         ",
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
