/**
 * Created by dariabondarchuk on 3/9/18.
 */

import React from 'react';
import FeedItem from './feeditem.js';
//TODO to not use indexes as the keys (indexes are used by default)
//keys only make sense in the context of the surrounding array //<RecipeFeed className="ListContainer" postsData={postsData}/>
const RecipeFeed = props => {
    const posts = props.posts.map(post => <FeedItem key={post.id.toString()} postInfo={post}/>);
    return <div className="feed_container">{posts}</div>;
};

export default RecipeFeed;