import React from "react";
import { Link, Outlet } from "react-router-dom";

const PostLayout = () => {
  return (
    <>
      <Link to="/postpage/post1">Post1</Link>
<br/><br/>
      <Link to="/postpage/post2">Post2</Link>
      <br/><br/>

      <Link to="/postpage/post3">Post3</Link>
      <br/><br/>

      <Link to="/postpage/newpost">newPost</Link>

      <Outlet/>
    </>
  );
};

export default PostLayout;
