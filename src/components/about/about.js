/**
 * Created by dariabondarchuk on 3/12/18.
 */
import React, {Component} from 'react';
import {getAboutData} from '../../data/test_datasource.js';

class AboutContainer extends React.Component {
    constructor () {
        super();
        this.state = {}
    }
    
    componentDidMount() {
        const self = this;
        getAboutData().then((data) => {
            this.setState(data);
        });
    }
    
    
    //TODO put the if statement here in case theres no data
    render () {
        const toRender = (Object.keys(this.state).length > 0)?
            (
                <div className='about_content'>
                    <p className="heading_gen">ABOUT ME</p>
                    <img className="about_photo" src={this.state.photoUrl}/>
                    <p className='about_text'>{this.state.text}</p>
                </div>
            ):
            (<h3>Sorry, no data yet.</h3>);
        return (
            <div class="main_container">
                <div className='about_container'>
                    {toRender}
                </div>
            </div>
            )
    }
};

export default AboutContainer;