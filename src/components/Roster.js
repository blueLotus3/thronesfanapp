import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

/* all charcters live within this componenet */
const Roster = () => {
    const [roster, setRoster] = useState([]);

    const url = "https://thronesapi.com/api/v2/Characters";

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

    // const [selectedChar, setSelectedChar] = useState(null);
    
    // const handleClick = (character) => {
    //     setRoster(character);
    //     console.log(character)
    // };

    return(
        <div>
        <ul>
        {roster.map((character) => (
            <Link key={character.id} to={`/Character/${character.id}`}>
           {/* <li key={character.id} onClick={() => handleClick(character)}> */}
           <li>
                {character.firstName}
        <img src={character.imageUrl} alt="thrones photos"></img>
               </li>
               </Link>
        ))}
        </ul>
    </div>
       )
   };


export default Roster;