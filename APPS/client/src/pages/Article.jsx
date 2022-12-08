import React from "react";
import Header from "../components/Header"; // header
import Footer from "../components/Footer"; // footer

const Article = () => {
  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      {/* Main item container */}
      <main className="articleitem">
        <section className="img">
          <img src={article.image} alt="Not Found" />
        </section>
        <section className="articleprice">
          <h2 className="price-sub__heading">{article.category.category}</h2>
          <h1 className="price-main__heading">{article.name}</h1>
          <p className="price-txt" dangerouslySetInnerHTML></p>

          <button
            onClick={add}
            className="btn price-cart__btn btn--orange"
            style={{ height: "40px", background: "#7635f0", color: "white" }}
          >
            Add to favorites
          </button>
        </section>
      </main>
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};

export default Article;
