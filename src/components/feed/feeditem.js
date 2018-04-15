/**
 * Created by dariabondarchuk on 3/12/18.
 */
import React from 'react';
import {Link} from 'react-router-dom';
const FeedItem = props => {
    return (
        <section className="feedPost">
            <Link className="dishname heading_gen" to='/recipes/1'>SWEET POTATO BOWL</Link>

            <div>
                <img className="feed_recipe_img" src={props.postInfo.photoUrl} alt="Yummy food"/>

                <p className="feed_recipe_descr">This is the recipe of the delicious sweet potato bowl. You are bound to
                    love it from the first bite.
                    <br/><br/>
                    <a className="readmore" href="#">Read more...</a>
                </p>
            </div>
            
            <br/><br/>
            <h3>Likes: {props.postInfo.likes}</h3>
        </section>
    );
};

export default FeedItem;
