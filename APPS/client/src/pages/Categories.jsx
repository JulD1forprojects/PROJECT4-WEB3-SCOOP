import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { useAppContext } from "../context/UseAppContext";
import ArticleCard from "../components/ArticleCard";
import Footer from "../components/Footer";

const CategoryArticles = ({ user }) => {
  let { category } = useParams(); // get category id from url
  const [categoryarticles, setCategoryarticles] = useState([]);

  const { articles } = useAppContext(); // get articles from state

  useEffect(() => {
    console.log(articles);
    // get category articles
    var newArray = articles.filter(function (el) {
      console.log(el);
      return el.category.category === category;
    });

    console.log(newArray);

    setCategoryarticles(newArray);
  }, [articles]);

  // rendering ui
  return (
    <>
      <Header user={user} />
      <br />
      <h2 className="text-center">{category} Articles</h2>
      <br />
      <Container>
        <div className="articlelist">
          {/* rendering article card */}
          {categoryarticles.map((v, i) => {
            return <ArticleCard key={i} article={v} />;
          })}
        </div>
      </Container>
      <br />
      <Footer />
    </>
  );
};

export default CategoryArticles;
