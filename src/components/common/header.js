/**
 * Created by dariabondarchuk on 3/9/18.
 */

import React from 'react';
const Header = props => {
    return (
        <header>
            <img src="/pretzel.png"/>
            <h3 className="headerSignature">WELCOME TO DARIA'S FOOD BLOG!</h3>
            <nav className="nav_bar">
                <a className="nav_item" href="/">Home</a>
                <a className="nav_item" href="/recipes">Recipes</a>
                <a className="nav_item" href="/about">About</a>
                <a className="nav_item" href="index.html">Store</a>
                <a className="nav_item" href="index.html">Blog</a>
            </nav>
        </header>
    )
};

export default Header;


