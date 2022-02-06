import React, { useState } from "react";

export default function NewPost() {
    const [newPost, setState] = useState({
        title: '',
        content: '',
      });
    
    const onChange = (e) =>
        setState({ ...newPost, [e.target.name]: e.target.value });

    return (
        <div>
            <h1>New Post</h1>
            <label className="newPostTitle" htmlFor="newTitle">
              Title
            </label>
            <input
              onChange={onChange}
              type="text"
              name="title"
              value={newPost.title}
              placeholder="Title"
            />
            <label className="newPostContent" htmlFor="newContent">
              Content
            </label>
            <input
              onChange={onChange}
              type="text"
              name="content"
              value={newPost.content}
              placeholder="content"
            />
            <button>Submit</button>
        </div>
    )
}
