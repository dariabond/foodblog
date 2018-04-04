/**
 * Created by dariabondarchuk on 3/9/18.
 */

import React from 'react';
const BlogPost = props => {
    return (
        <div className="blogPost">
            <h1>Blog Post {props.postInfo.id}</h1>
            <h3>Likes: {props.postInfo.likes}</h3>
            <p>Recipe: {props.postInfo.text}</p>
        </div>
    );
};

export default BlogPost;