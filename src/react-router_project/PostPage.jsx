import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import DataContext from "../context/DataContext";
// import { Link } from 'react-router-dom'

export const PostPage = () => {
  const { posts, handleDelete, navigate } = useContext(DataContext);
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);
  return (
    <main className="post-page">
      <article className="post">
        {post && (
          <>
            <h2>{post.title}</h2>
            <p className="postDate">{post.datatime}</p>
            <p className="postBody">{post.body}</p>
            <div className="btn">
              <button
                onClick={() => navigate(`/edit/${id}`)}
                className="edit-btn"
              >
                Edit
              </button>
              <button
                className="delete-btn"
                onClick={() => handleDelete(post.id)}
              >
                Delete Post
              </button>
            </div>
          </>
        )}
        {!post && (
          <>
            <h2>Post Not Found</h2>
            <p>Well, that's disapponting.</p>
            <Link to={"/"}>
              <p>visit Our Homepage</p>
            </Link>
          </>
        )}
      </article>
    </main>
  );
};
