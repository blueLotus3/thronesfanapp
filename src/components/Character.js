import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

/* Character details that is taken from Roster.js */

const Character = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState(null);

    

    useEffect(() => {
        const url = `https://thronesapi.com/api/v2/Characters/${id}`;
        
        fetch(url)
        .then((response) => response.json())
        .then((character) => {
            console.log(character);
            setCharacter(character)
        })
        .catch((err) => {
            console.log(err.message)
        });
    }, [id]);
    if (!character) {
        return <div>Loading...</div>
    }

    return (
        <div className="charDiv">
            <Link to={`/`}>X</Link>
            <p>The Kingdom Presents...</p>
        <p>{character.fullName}</p>
        <img src={character.imageUrl} alt="thrones photos"></img>
        <p>Title: {character.title}</p>
    <p>Family: {character.family}</p>
        </div>
    )

}



export default Character