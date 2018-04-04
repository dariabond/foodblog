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
            <SidebarSuggestion text={"Try this recipe"} imgUrl="/pepperoni-pizza.jpg" name="MILANO PEPPERONI PIZZA"/>
        </section>
    )
};
export default SideBar;

/*<div className="sidebar_item"><h1>Suggestion 1</h1></div>
<div className="sidebar_item"><h1>Suggestion 2</h1></div>
<div className="sidebar_item"><h1>Suggestion 3</h1></div>
<div className="sidebar_item"><h1>Suggestion 4</h1></div>
<div className="sidebar_item"><h1>Suggestion 5</h1></div>*/
