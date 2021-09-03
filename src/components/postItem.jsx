import React from 'react';
import Button from "./UI/button/Button";

const PostItem = (props) => {
    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.number}. {props.post.userName}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="post__btns">
                <Button onClick={() => props.deletePost(props.post)}>Delete</Button>
            </div>
        </div>
    );
};

export default PostItem;