import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

/* all charcters live within this componenet */
const Roster = () => {
    const [roster, setRoster] = useState([]);

    const url = "https://thronesapi.com/api/v2/Characters";

    /* useEffect that fetches url to render api data*/
    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then((roster) => {
            console.log(roster);
            setRoster(roster)
        })
        .catch((err) => {
            console.log(err.message)
        });
    }, []);



    return(
        <div className="rosterDiv">
        <ul>
        {roster.map((character) => (
            <Link key={character.id} to={`/Character/${character.id}`}>
           {/* <li key={character.id} onClick={() => handleClick(character)}> */}
           <li>      
            <motion.div whileHover= {{ scale: 1.1 }} whileTap={{ scale: 0.8}}>
                <p>{character.firstName}</p>
        <img src={character.imageUrl} alt="thrones photos"></img>
        </motion.div>
               </li>
               </Link>
        ))}
        </ul>
    </div>
       )
   };


export default Roster;