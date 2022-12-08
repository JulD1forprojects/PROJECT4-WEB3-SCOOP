import React from "react";
import Header from "../components/Header"; // header
import Footer from "../components/Footer"; // footer

const Categories = () => {
  return (
    <>
      <Header />
      <br />
      <h2 className="text-center">All Categories</h2>
      <br />
      <Container>
        <div className="row"></div>
      </Container>
      <br />
      <Footer />
    </>
  );
};

export default Categories;
