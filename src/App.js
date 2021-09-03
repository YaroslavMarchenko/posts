import React, {useMemo, useRef, useState} from 'react';
import "./styles/App.css"
import PostList from "./components/postList";
import PostForm from "./components/postForm";
import Select from "./components/UI/select/Select";
import Input from "./components/UI/input/Input";
import FilterPost from "./components/FilterPost";

function App() {
    const [posts, setPosts] = useState(
        [
            {id: 1, userName: "Artur Shkred", body: "Let's get in touch?"},
            {id: 2, userName: "Artur Shkred", body: "Hello, people"},
            {id: 3, userName: "Artur Shkred", body: "This is my first post here"},
        ]
    );

    const [filtered, setFiltered] = useState({sort: '', query: ''})


    const sortedPosts = useMemo(() => {
        if (filtered.sort) {
            return [...posts].sort((a, b) => a[filtered.sort].localeCompare(b[filtered.sort]))
        }
        return posts;
    }, [filtered.sort, posts]);

    const sortedSearchPosts = useMemo(() => {
        return sortedPosts.filter(post => post.userName.toLowerCase().includes(filtered.query))
    }, [filtered.query, sortedPosts])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    };

    const deletePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App">
            <PostForm createPost={createPost}/>
            <hr style={{margin: "30px 0"}}/>
            <FilterPost filtered={filtered} setFiltered={setFiltered}/>
            <PostList deletePost={deletePost} posts={sortedSearchPosts} title="User Posts"/>
        </div>
    );
};

export default App;
