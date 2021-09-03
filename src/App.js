import React, {useMemo, useRef, useState} from 'react';
import "./styles/App.css"
import PostList from "./components/postList";
import PostForm from "./components/postForm";
import FilterPost from "./components/FilterPost";
import Modal from "./components/UI/modal/Modal";
import Button from "./components/UI/button/Button";
import {usePosts} from "./hooks/usePost";

function App() {
    const [posts, setPosts] = useState([]);
    const [filtered, setFiltered] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false);
    const sortedSearchPosts = usePosts(posts, filtered.sort, filtered.query);

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    };

    const deletePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    };

    return (
        <div className="App">
            <Button style={{marginTop: '50px'}} onClick={() => setModal(true)}>
                Create Post
            </Button>
            <Modal visible={modal} setVisible={setModal}>
                <PostForm createPost={createPost}/>
            </Modal>
            <hr style={{margin: "30px 0"}}/>
            <FilterPost filtered={filtered} setFiltered={setFiltered}/>
            <PostList deletePost={deletePost} posts={sortedSearchPosts} title="User Posts"/>
        </div>
    );
};

export default App;
