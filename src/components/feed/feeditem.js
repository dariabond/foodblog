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
                <Link to='/recipes/1'>
                    <img className="feed_recipe_img" src={props.postInfo.photoUrl} alt="Yummy food"></img>
                </Link>

                <p className="feed_recipe_descr">This is the recipe of the delicious sweet potato bowl. You are bound to
                    love it from the first bite.
                    <br/><br/>
                    <Link className="readmore" to='/recipes/1'>Read more...</Link>
                </p>
            </div>

            <div>
                <p className='feed_tags'>Tags: {props.postInfo.tags.join(', ')}</p>
                <p className='feed_comments'>Comments: {props.postInfo.hasOwnProperty('comments')?props.postInfo.comments.length:0}</p>
            </div>
            
            
        </section>
    );
};

export default FeedItem;
