/**
 * Created by dariabondarchuk on 3/9/18.
 */

import React from 'react';
import {Link} from 'react-router-dom';
const Header = props => {
    return (
        <header>
            
            <Link to='/'>
                <img src="/pretzel.png"/>
            </Link>
            <h3 className="headerSignature">WELCOME TO DARIA'S FOOD BLOG!</h3>
            <nav className="nav_bar">
                <Link className="nav_item" to="/">Home</Link>
                <Link className="nav_item" to="/recipes">Recipes</Link>
                <Link className="nav_item" to="/about">About</Link>
                <Link className="nav_item" to="/">Store</Link>
                <Link className="nav_item" to="/">Blog</Link>
            </nav>
        </header>
    )
};

export default Header;


