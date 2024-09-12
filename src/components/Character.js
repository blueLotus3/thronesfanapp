import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'

/* Character details that is taken from Roster.js */
const Character = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState(null);

    
    /* useEffect that fetches indiviual id of api data to display indiviual char */
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
            <div className="backButton">
            <Link to={`/`}>X</Link>
            </div>
            <motion.div whileHover= {{ scale: 1.1 }} whileTap={{ scale: 0.8}}>
            <p>The Kingdom Presents...</p>
        <p>{character.fullName}</p>
        <img src={character.imageUrl} alt="thrones photos"></img>
        <p>Title: {character.title}</p>
    <p>Family: {character.family}</p>
    </motion.div>
        </div>
    )

}



export default Character