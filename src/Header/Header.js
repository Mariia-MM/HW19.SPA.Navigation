import React from "react";
import { NavLink } from "react-router-dom";

import {MENU} from "../App";
import "./Header.css";

const Header=()=>{
    return(
        <div className="headerWrapper" >
            {MENU.map((menuItem)=>(
                <NavLink to = {menuItem.path} className="menuTitle">{menuItem.title}</NavLink>
            ))}
        </div>
    )
}
export default Header;