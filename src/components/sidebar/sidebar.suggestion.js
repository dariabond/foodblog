/**
 * Created by dariabondarchuk on 3/30/18.
 */
import React from 'react';

//props.text
//props.imageUrl
const SidebarSuggestion = (props) => {
    return (
        <section className="sidebar_item">
            <p>{props.text}</p>
            <a href="#">{props.name}</a>
            <img src={props.imgUrl}/>
        </section>
    )
};

export default SidebarSuggestion;