/**
 * Created by dariabondarchuk on 3/12/18.
 */
import React from 'react';
import HomeContainer from './home.js';
import AboutContainer from './about/about.js';
import {Route, Switch} from 'react-router-dom';
import SideBar from './sidebar/sidebar.js';
const RoutesContainer = props => {
    return (
        <Switch>
            <Route exact path='/' render={() => {
            return (<HomeContainer posts={props.postsData}/>);
        }}/>
            <Route exact path='/about' component={AboutContainer}/>
        </Switch>
    );
};
export default RoutesContainer;