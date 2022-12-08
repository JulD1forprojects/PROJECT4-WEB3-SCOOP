import React from "react";
import Header from "../components/Header"; // header
import Footer from "../components/Footer"; // footer

const CategoryArticles = () => {
  return (
    <>
      <Header />
      <br />
      <h2 className="text-center">Articles</h2>
      <br />
      <Container>
        <div className="articlelist"> </div>
      </Container>
      <br />
      <Footer />
    </>
  );
};

export default CategoryArticles;
