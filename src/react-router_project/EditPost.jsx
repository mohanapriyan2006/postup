import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import DataContext from "../context/DataContext";

const EditPost = () => {
  const { posts, editTitle, setEditTitle, editBody, setEditBody, handleEdit } =
    useContext(DataContext);
  const { id } = useParams();
  const post = posts.find((post) => post.id === id);

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post, posts, setEditBody, setEditTitle]);

  return (
    <main className="NewPost">
      {editTitle && (
        <>
          {" "}
          <h2>Edit Post</h2>
          <form className="newPostForm" onSubmit={(e) => e.preventDefault()}>
            <label>Title:</label>
            <input
              type="text"
              required
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
            <label>Post:</label>
            <textarea
              type="text"
              required
              value={editBody}
              onChange={(e) => setEditBody(e.target.value)}
            />
            <div className="btn">
              <button type="submit" onClick={() => handleEdit(id)}>
                Submit
              </button>
            </div>
          </form>
        </>
      )}
      {!editTitle && (
        <>
          <h2>Post Not Found</h2>
          <p>Well, that's disapponting.</p>
          <Link to={"/"}>
            <p>visit Our Homepage</p>
          </Link>
        </>
      )}
    </main>
  );
};

export default EditPost;
