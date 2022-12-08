import React from "react";
import Header from "../components/Header"; // header
import Footer from "../components/Footer"; // footer

const Articles = () => {
  return (
    <>
      <Header user />
      <br />
      <h2 className="text-center">All Articles</h2>
      <br />
      <Container>
        <div className="row"></div>
      </Container>
      <br />
      <Footer />
    </>
  );
};
export default Articles;
