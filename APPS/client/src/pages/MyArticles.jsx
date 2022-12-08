import React from "react";
import Header from "../components/Header"; // header

const MyArticles = () => {
  return (
    <>
      <Header />

      <Container>
        <br />
        <div className="d-flex justify-content-between align-items-center gap-10 flex-wrap-wrap">
          <h2 className="text-center">My Articles</h2>
          <button className="btn btn-myprimary">Add New Article</button>
        </div>
        <br />

        <div className="row">
          <p className="description"></p>

          <br />
          <br />
          <button className="btn btn-myprimary">Edit</button>

          <button className="btn btn-myprimary">Delete</button>
        </div>
      </Container>
      <br />
      <Footer />
    </>
  );
};

export default MyArticles;
