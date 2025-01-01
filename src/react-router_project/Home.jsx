import React, { useContext } from "react";
import Feed from "./Feed";
import DataContext from "../context/DataContext";

export const Home = () => {
  const { searchResult, fetchError, isLoading } = useContext(DataContext);
  return (
    <main className="Home">
      {isLoading && (
        <p style={{ color: "blue", textAlign: "center" }}>
          Posts are Loading...
        </p>
      )}
      {fetchError && (
        <p style={{ color: "red", textAlign: "center" }}>{fetchError}</p>
      )}
      {!isLoading &&
        !fetchError &&
        (searchResult.length ? (
          <Feed posts={searchResult} />
        ) : (
          <p style={{ marginTop: "2rem" }}>No posts to display ! </p>
        ))}
    </main>
  );
};
