/**
 * Created by dariabondarchuk on 3/9/18.
 */

import React from 'react';
import SidebarAbout from './sidebar.about.js';
import SidebarSuggestion from './sidebar.suggestion.js';
const SideBar = props => {
    return (
        <section className="sidebar_container">
            <SidebarAbout/>
            <SidebarSuggestion text={"Try this recipe"} imgUrl="/pepperoni_pizza.jpg" name="MILANO PEPPERONI PIZZA"/>
        </section>
    )
};
export default SideBar;

