/**
 * Created by dariabondarchuk on 3/9/18.
 */

import React, {Component} from 'react';
import {getRecipeById} from '../../data/test_datasource.js';
import SideBar from '../sidebar/sidebar.js';

class Recipe extends React.Component {
    constructor(props) {
        //class components should always call base constructor with props
        super(props);
        this.state = {
            recipeData: {
                id: null,
                likes: 0,
                text: ""
            }
        };
    }
    
    componentDidMount() {
        getRecipeById().then((data) => {
            this.setState({
                recipeData: data
            });
        });
    }
    
    //TODO make recipe list the component
    setupContent(dataArray) {
        let result = [];
        dataArray.forEach(function(item) {
            
            //TODO replace this with sth normal
            if (item.hasOwnProperty('text')) {
                result.push(<p className="recipe_text">{item.text}</p>);
                
            } else if (item.hasOwnProperty('image')) {
                result.push(<img className="recipe_img" src={item.image} alt="Yummy food"/>);
                
            } else if (item.hasOwnProperty('list')) {
                let listItems = [];
                item.list.forEach(function(ingredientItem) {
                    listItems.push(<li>{ingredientItem}</li>);
                });
                result.push(
                    <div className="recipe_list_container">
                        <p>INGREDIENTS</p>
                        <ul className='recipe_list'>
                            {listItems}
                        </ul>
                    </div>
                );
            }
        });
        return result;
    }
    
    render () {
        console.log(this.state.recipeData);
        let content = this.state.recipeData.articleOrder?this.setupContent(this.state.recipeData.articleOrder):null;
        console.log(content);
        return (
            <div className="main_container">
                <div className='recipe_container'>
                    <p className="heading_gen dishname">SWEET POTATO BOWL</p>
                    {content}
                </div>
                <SideBar/>
            </div>
        );
    }
};

export default Recipe;