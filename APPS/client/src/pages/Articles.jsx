import React from "react";
import Header from "../components/Header"; // header
import ArticleCard from "../components/ArticleCard"; // article card
import { Container } from "react-bootstrap"; // conteiner for ui
import Footer from "../components/Footer"; // footer
import { useAppContext } from "../context/UseAppContext"; // app contexxt for getting articles

const Articles = ({ user }) => {
  const { articles } = useAppContext(); // getting articles

  // rendering ui
  return (
    <>
      <Header user={user} />
      <br />
      <h2 className="text-center">All Articles</h2>
      <br />
      <Container>
        <div className="row">
          {/* rendering  article card for all articles */}

          {articles.map((v, i) => {
            return <ArticleCard key={i} article={v} />;
          })}
        </div>
      </Container>
      <br />
      <Footer />
    </>
  );
};

export default Articles;
