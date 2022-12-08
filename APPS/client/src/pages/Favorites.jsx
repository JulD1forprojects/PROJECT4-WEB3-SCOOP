import React from "react";
import Header from "../components/Header"; // header
import Footer from "../components/Footer"; // footer

const Favorites = () => {
  return (
    <>
      <Header />
      <br />
      <h2 className="text-center">My Favorites Blogs</h2>
      <br />
      <Container>
        <div className="row"></div>
      </Container>
      <br />
      <Footer />
    </>
  );
};

export default Favorites;
