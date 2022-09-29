import React from "react";
import './NavBar.css'
import CarWidget from '../CarWidget'


export const NavBar = ()=>{
    return (
        <ul>
        <li><a href="default.asp">Home</a></li>
        <li><a href="default.asp"><CarWidget/></a></li>
      </ul> 
    )
}

export default NavBar