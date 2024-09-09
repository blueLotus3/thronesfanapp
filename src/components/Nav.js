import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {

    return (
        <div className="nav">
            <Link to ='/'>
                <div className="navlink">All Characters</div>
                </Link>
        </div>
    )
}



export default Nav 