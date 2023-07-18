import React from "react";
import { NavLink } from "react-router-dom";
import './Nav.css'

function Nav() {
	return ( 
		<div className="nav">
			<ul>
				<li><NavLink to='/'>Home</NavLink></li>
				<li><NavLink to='/contact'>Contact</NavLink></li>
				<li><NavLink to='/shop'>Shop</NavLink></li>
			</ul>

		</div>
	 );
}

export default Nav;