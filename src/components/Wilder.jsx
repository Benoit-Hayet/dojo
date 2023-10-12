import { useState } from 'react';

function Wilder({student}) {
    
    const [likeReact, setLikeReact]=useState (student.reactLike);

    const changeMind = () => {
         setLikeReact(!likeReact)
         student.reactLike = likeReact
    };
    return (
        <div>
        <h1>{student.name}</h1>
            <h2>
                {student.reactLike ? "Adore React ! :D"
                : "Deteste React ! :O"}
            <button onClick= {changeMind}>Afficher la vérité</button>
            </h2>
            <img src={student.imgSrc}/>
        </div>
    )
}

export default Wilder;