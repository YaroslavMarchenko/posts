import React, {useState} from 'react';
import Input from "./UI/input/Input";
import Button from "./UI/button/Button";

const PostForm = (props) => {

    const [post, setPost] = useState({
        userName: '',
        body: '',
    })

    const addPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post,
            id: Date.now()
        }
        props.createPost(newPost)
        setPost({userName: '', body: ''})
    };

    return (
        <form>
            <Input
                value={post.userName}
                onChange={e => setPost({...post, userName: e.target.value})}
                type='text'
                placeholder='User Name'/>
            <Input
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
                type='text'
                placeholder='Post Text'/>
            <Button onClick={addPost}>Send Post</Button>
        </form>
    );
};

export default PostForm;