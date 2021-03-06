/**
 * Created by dariabondarchuk on 3/11/18.
 */
import React, { Component } from 'react';
import Header from './common/header.js';
import RoutesContainer from './routes.js';
import {getMainPageData} from '../data/test_datasource.js';

//TODO rename postsData
class AppRoot extends React.Component {
    constructor(props) {
        //class components should always call base constructor with props
        super(props);
        this.state = {
            postsData: [],
            name: "",
            isLoading: true
        };
    }
    
    componentDidMount() {
        getMainPageData().then((data) => {
            this.setState({
                postsData : data,
                isLoading: false
            });
        });
    }

    render () {
        const toRender = this.state.isLoading ? (
            <h3>Data is not loaded yet</h3>
        ) : (
            <RoutesContainer postsData={this.state.postsData}/>
        );
        return (
            <div className="app">
                <Header name={this.state.name}/>
                {toRender}
                <footer className="footer_text">Made by <a href="">Daria Bondarchuk</a></footer>
            </div>
        )
    }
}

export default AppRoot;
