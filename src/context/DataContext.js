import { createContext, useEffect, useState } from "react";
import useAxiosFetch from "../hooks/useAxiosFetch";
import { format } from "date-fns";
import api from "../api/post";
import useWindowSize from "../hooks/useWindowSize";

import React from "react";
import { useNavigate } from "react-router-dom";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const { data, fetchError, isLoading } = useAxiosFetch(
    "http://localhost:3500/posts"
  );
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");
  const { width } = useWindowSize();

  useEffect(() => {
    setPosts(data);
  }, [data]);

  // search

  useEffect(() => {
    const filteredSearch = posts.filter(
      (post) =>
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase())
    );

    setSearchResult(filteredSearch);
  }, [posts, search]);

  // new post

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? Number(posts[posts.length - 1].id) + 1 : 1;
    const datatime = format(new Date(), "MMMM dd, yyyy pp");

    const newPost = { id: `${id}`, title: postTitle, datatime, body: postBody };
    try {
      const response = await api.post("/posts", newPost);
      const allPosts = [...posts, response.data];
      setPosts(allPosts);
      setPostBody("");
      setPostTitle("");
      navigate("/");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  // postpage

  const handleDelete = async (id) => {
    try {
      await api.delete(`/posts/${id}`);
      const postList = posts.filter((post) => post.id !== id);
      setPosts(postList);
      navigate("/");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  // edit page

  const handleEdit = async (id) => {
    try {
      const date = format(new Date(), "MMMM dd, yyyy pp");
      const editedPost = {
        id,
        title: editTitle,
        datatime: date,
        body: editBody,
      };
      const response = await api.put(`/posts/${id}`, editedPost);
      setPosts(
        posts.map((post) => (post.id === id ? { ...response.data } : post))
      );
      setEditBody("");
      setEditTitle("");
      navigate("/");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  return (
    <DataContext.Provider
      value={{
        width,
        fetchError,
        isLoading,
        posts,
        setPosts,
        search,
        setSearch,
        searchResult,
        setSearchResult,
        postTitle,
        setPostTitle,
        postBody,
        setPostBody,
        editTitle,
        setEditTitle,
        editBody,
        setEditBody,
        handleSubmit,
        handleDelete,
        handleEdit,
        navigate
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
