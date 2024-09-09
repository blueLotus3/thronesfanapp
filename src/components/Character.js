import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

/* Character details that is taken from Roster.js */

const Character = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState(null);

    const url = `https://thronesapi.com/api/v2/Characters/${id}`;

    useEffect(() => {
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
        <div>
            <p>Indiviual Character Detail</p>
        <p>{character.firstName}</p>
        <img src={character.imageUrl} alt="thrones photos"></img>
        <p>{character.title}</p>
        </div>
    )

}



export default Character