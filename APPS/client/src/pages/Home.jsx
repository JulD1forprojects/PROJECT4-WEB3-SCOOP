import React from "react";
import Slider from "../components/Slider";
import Header from "../components/Header";
import ArticleCard from "../components/ArticleCard";
import CategoryCard from "../components/CategoryCard";
import { Container } from "react-bootstrap";
import Footer from "../components/Footer";
import { useAppContext } from "../context/UseAppContext";

const Home = ({ user }) => {
  const { featuredarticles, categories } = useAppContext(); // getting featured article from app state

  return (
    <>
      <Header user={user} />
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

              <div className="row">
                {/* rendering featured article */}

                {featuredarticles &&
                  featuredarticles.map((v, i) => {
                    return <ArticleCard key={i} article={v} />;
                  })}
              </div>
            </div>

            <div className="col-md-5">
              <h2 className="text-center">Categories</h2>
              <br />
              <div className="row">
                {/* rendering featured article */}

                {categories &&
                  categories.map((v, i) => {
                    return (
                      <div className="col-md-6">
                        <CategoryCard key={i} category={v} />
                      </div>
                    );
                  })}
              </div>
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
