import "./App.css";
import React from "react";
import { Home } from "./react-router_project/Home";
import { NewPost } from "./react-router_project/NewPost";
import { PostPage } from "./react-router_project/PostPage";
import { About } from "./react-router_project/About";
import { Missing } from "./react-router_project/Missing";
import { Footer } from "./react-router_project/Footer";
import { Nav } from "./react-router_project/Nav";
import { Route, Routes } from "react-router-dom";
import EditPost from "./react-router_project/EditPost";
import { DataProvider } from "./context/DataContext";

const App = () => {
  return (
    <div className="App">
      <DataProvider>
        <Nav title={'postUp'}/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post">
              <Route index element={<NewPost />} />
              <Route path=":id" element={<PostPage />} />
            </Route>
            <Route path="/about" element={<About />} />
            <Route path="/edit/:id" element={<EditPost />} />
            <Route path="*" element={<Missing />} />
          </Routes>
        </div>
        <Footer />
      </DataProvider>
    </div>
  );
};

export default App;
