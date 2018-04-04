/**
 * Created by dariabondarchuk on 3/12/18.
 */
import React, {Component} from 'react';
import {getAboutData} from '../../data/testDataSource.js';

class AboutContainer extends React.Component {
    constructor () {
        super();
        this.state = {}
    }
    
    componentDidMount() {
        const self = this;
        getAboutData().then((data) => {
            console.log("DATA");
            console.log(data);
            this.setState(data);
        });
    }
    
    
    //TODO put the if statement here in case of lack of the data
    render () {
        const toRender = (Object.keys(this.state).length > 0)?
            (
                <div className='about_content'>
                    <h1>ABOUT ME</h1>
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