import React, {useState} from 'react'
import Post from './Post'
import './Feed.css'

const Feed = () => {
    const data = [{
    // audioguide
        type: "Mural de vinilo",
        name: "Domingo Zapata",
        image: "https://i0.wp.com/gothamtogo.com/wp-content/uploads/2019/08/Domingo-Zapata-Mural-in-Times-Square.jpeg?ssl=1",
        title: "Life is a Dream",
        artist: "One Time Square",
        text: "https://www.youtube.com/embed/DEt1gZ49BUY",
        year: "2019",
        style: "Moderno",
        justification: "La obra titulada “La vida es un sueño” representa un estilo de vixda. Este mural tiene 15 pisos de altura y 30,000 pies cuadrados (sq. ft). El significado del título no es traer algo comercial a Time Square, que es la parte más comercial del mundo. Zapata quiere que los turistas y otras personas disfruten la vida. Observen en la parte superior, el mural dice la vida es un sueño. A la derecha de la obra, el mural dice todas personas mueren, pero no todas personas viven. Este mural tiene muchos colores y temas. El mural tiene aspectos del estilo de arte europeo moderno. Por ejemplo, Pablo Picasso tiene muchas pinturas sobre guitarras y Henri de Toulouse-Lautrec tiene muchas pinturas sobre hombres en trajes. Este mural tiene múltiples lados, pero en esta imagen, podemos ver flores a la izquierda. En la parte central podemos ver las guitarras.",
        contexto: "Zapata nació el 22 de diciembre de 1974 en Palma, España. Él tiene un estudio en Gramercy Park, Nueva York con su esposa. Zapata pintó este cuadro entre 2019 - 2020. Cuando él creó este mural, Zapata tenía cuarenta y siete años. La instalación requirió mucha gente a construir. Este mural me recuerda a un anuncio porque tiene muchas imágenes y símbolos.",
        conexion: "Yo fui a este mural, pero ahora el edificio está en construcción y no puede ver el mural. Después de la exposición de murales, el lienzo de vinilo fue donado a organizaciones sin fines de lucro de la ciudad de Nueva York por ejemplo Scholas Occurrentes y Elevate New York. No hay otro arte similar a este mural cerca de Times Square. Estoy de acuerdo con el propósito del mural de llamar la atención del espectador y notar los pequeños detalles. Estos detalles incluyen las guitarras, texto que dice kiss me now y flores. También, estoy de acuerdo con el estilo caótico y desestructurado. Es un buen contraste con los anuncios limpios que llenan Times Square.",
    },
    { // audioguide
        type: "Graffitis",
        name: "J Demsky",
        image: "https://streetartnyc.org/wp-content/uploads/2017/12/demsky-street-art-queens-nyc.jpg",
        title: "Untitled.",
        artist: "261 Bowery, New York, NY 10002",
        justification: "Este mural de graffitis tiene 1 pisos de altura.Demsky usó colores oscuros para este mural. El tema del mural es sobre el alfabeto. Este mural tiene formas geométricas. A la izquierda de la mural tiene más rosada y azul.",
        year: "2017",
        style: "Arte de la calle",
        text: "https://www.youtube.com/embed/",
        contexto: "Demsky nació en 1979 en Elche, Spain. Cuando creó este mural, Demsky tenía treinta y ocho años. El estilo mural de Demsky es diferente al mural La vida es un sueño (Life is a Dream) de Zapata. En este mural hay muchos geométricos. Pero una similitud es que Demsky y Zapata pusieron sus murales en paredes en frente de una tienda. Durante su juventud, Demsky era influenciado por el arte grafiti en 1990s. Según Instagram, Demsky vive en España ahora. Tiene una tienda en el sitio web para los suéteres con patrones y estilos geométricos. Zapata pintó este cuadro entre 2017.",
        conexion: "Este mural es más abstracto que el mural de Domingo Zapata. Los colores son brillantes y su trabajo es muy organizado en comparación con lo que esperas que se vea el arte callejero/graffiti. La colocación de las figuras en el mural es muy exacta y matemática en la medida. El mural me recuerda al juego Pac Man.",
    },
    { // audioguide
        type: "Esculturas",
        name: "Manuel Chili (Caspicara)",
        image: "https://s.wsj.net/public/resources/images/BN-OV264_MASTER_TOP_20160708155949.jpg",
        title: "The Postrimerías del Hombre",
        artist: "Museo y Biblioteca de la Hispanic Society",
        text: "https://www.youtube.com/embed/",
        year: "1775",
        style: "Moderno",
        justification: "Al centro de la exhibición podemos ver una persona con cadenas en de su cuello. A la izquierda de la exhibición podemos ver un esqueleto. Observen, el cráneo tiene suturas detalladas. A la derecha de la exhibición podemos ver una mujer que está orando. El tema del cuadro es animar al espectador a pensar en la vida después de la muerte. Tiene una altura de 6 pulgadas, un ancho de 4 pulgadas y una profundidad de 4 pulgadas. Este escultura usa madera policromada, vidrio y metal (polychrome wood, glass, and metal).",
        contexto: "Caspicara nació en Quito, Ecuador en 1723.  Durante esta época, Ecuador era parte de España. Caspicara murió en 1796. Cuando creó esta escultura, él tenía cincuenta y dos anos. Caspicara tiene muchos arte sobre religión por ejemplo 'Recumbent Christ,' en el museo nacional en Quito. Católico Romano es una religión muy popular en Ecuador (por contexto, católico romano cree en jesucristo). El museo y biblioteca de la Hispanic Society tiene muchos arte de español. La mayoría del arte pasado de Caspicara eran esculturas sobre la crucifixión de Cristo. La escultura policromada fue la forma dominante de escultura religiosa en España y América Latina desde el siglo dieciséis hasta el siglo diecinueve. Durante trescientos años los españoles controlaron el Ecuador. En 1822, Ecuador se independizó de España. La Inquisición no fue abolida definitivamente hasta 1834, durante el reinado de Isabel II, tras un período de decadencia en el siglo anterior.",
        conexion: "El tema me recuerda al libro se llama 'El infierno de Dante.' Este paisaje es un caso excepcional en la historia del arte.",
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
    const [conexion, setConexion] = useState('');
    const [contexto, setContexto] = useState('');

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
    const contextoChangeHandler = (event) => {
        setContexto(event.target.value)
    }
    const conexionChangeHandler = (event) => {
        setConexion(event.target.value)
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
            contexto: contexto,
            conexion: conexion,  
        }
        console.log(newPost);
        setPosts([newPost, ...posts]) // new posts and everything else in the post
        console.log(posts)
    }

    return (
        <div className="feed">
            <div className="newPost">
                <h2>Agregar nueva publicación:</h2>

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
                
                <label>Contexto</label>
                <input onChange={contextoChangeHandler}></input>

                <label>Conexion</label>
                <input onChange={conexionChangeHandler}></input>
            
            </div>
            <button onClick={addPosts}>agregar nueva publicación</button>

            {posts.map((location) => (
                <Post 
                name={location.name} 
                image={location.image} 
                
                type={location.type}
                title={location.title}
                artist={location.artist}
                year={location.year}
                style={location.style}
                justification={location.justification}
                contexto={location.contexto}
                conexion={location.conexion}

                text={location.text}
                />
            ))}
        </div>
    )
}

export default Feed