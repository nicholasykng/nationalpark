import React from 'react'
import {NavLink} from 'react-router-dom'
const NavBar = () => {
    return (
        <div className="navbar">
            <NavLink to='/'>Home</NavLink>
            <NavLink to="/parks">National Parks</NavLink>
            <NavLink to="/new">Add A National Park</NavLink>
        </div>
    )
}
export default NavBar