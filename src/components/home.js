/**
 * Created by dariabondarchuk on 3/12/18.
 */
import React from 'react';
import RecipeFeed from './feed/feed.js';
import SideBar from './sidebar/sidebar.js';

const HomeContainer = props => {
    return (
        <div class="main_container">
            <RecipeFeed posts={props.posts}/>
            <SideBar/>
        </div>
    );
};
//TODO read about adding sidebar on the certain routes
export default HomeContainer;

/*
<div className="main_container">
    <RecipeFeed posts={props.posts}/>
    <SideBar/>
</div>
*/