import React, { useContext } from "react";
import "./styles/Nav.css";
import { Link } from "react-router-dom";
import { FaLaptop, FaMobileAlt, FaTabletAlt } from "react-icons/fa";
import DataContext from "../context/DataContext";

export const Nav = ({ title }) => {
  const { width, search, setSearch } = useContext(DataContext);
  return (
    <div className="nav-div">
      <header>
        <h1 className="header">
          {title}
          <i>
            {width < 768 ? (
              <FaMobileAlt />
            ) : width < 892 ? (
              <FaTabletAlt />
            ) : (
              <FaLaptop />
            )}
          </i>
        </h1>
      </header>
      <nav>
        <div>
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              id="search"
              placeholder="Search Posts"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
        </div>
        <div>
          <Link className="link" style={{ textDecoration: "none" }} to="/">
            Home
          </Link>

          <Link className="link" style={{ textDecoration: "none" }} to="/post">
            Post
          </Link>

          <Link className="link" style={{ textDecoration: "none" }} to="/about">
            About
          </Link>
        </div>
      </nav>
    </div>
  );
};
