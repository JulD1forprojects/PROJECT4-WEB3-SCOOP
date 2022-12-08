import React from "react";
import Header from "../components/Header"; // header
import Footer from "../components/Footer"; // footer

const Home = () => {
  return (
    <>
      <Header />
      <div className="mmmmain">
        <Slider />
        <br />

        <Container>
          <div className="row">
            <div className="col-md-7">
              <h2 className="text-left" style={{ textAlign: "left" }}>
                Featured Articles
              </h2>
              <br />

              <div className="row"></div>
            </div>

            <div className="col-md-5">
              <h2 className="text-center">Categories</h2>
              <br />
              <div className="row"></div>
            </div>
          </div>
        </Container>
        <br />

        <Footer />
      </div>
    </>
  );
};

export default Home;
