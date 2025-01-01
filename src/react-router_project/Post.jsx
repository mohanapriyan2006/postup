import React from "react";
import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";

export const Post = ({post}) => {
//   const { id } = useParams();
// console.log(post)

  return (
    <article  className="post">
    <Link style={{textDecoration: 'none' , color: 'black'}} to={`post/${post.id}`}>
      <h2>{post.title}</h2>
      <p className="postDate">{post.datatime}</p>
      </Link>
      <p className="postBody">
        {(post.body).length <= 25 ? post.body : `${post.body.slice(0,25)}...` }
      </p>
      
    </article>
  );
};
