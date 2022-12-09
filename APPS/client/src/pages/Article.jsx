import React, { useEffect, useState } from "react";
import Header from "../components/Header"; // header
import { useParams, useNavigate } from "react-router-dom"; // use param for getting id of article from url, useNavigate for redirect between ages
import axios from "axios"; // axios for api call
import Footer from "../components/Footer"; // footer
import { useAppContext } from "../context/UseAppContext"; // getting app context to add article into cart

const Article = ({ user }) => {
  let { articleid } = useParams(); // getting article id from url

  const { addToFavorite } = useAppContext(); // add to favorites function
  const navigate = useNavigate(); // navigate method for redirecting to other pages

  const [article, setArticle] = useState({}); // article state

  const [loading, setLoading] = useState(true); // default loading true

  //! getting article data
  const getData = async (id) => {
    try {
      // get article from backend api call
      const { data } = await axios.get(`/api/v1/getarticle/${id}`);
      console.log(data);
      if (data.status === true) {
        // set article into state
        setArticle(data.articles);
        let arr = [];
        setLoading(false); // loading false
      } else {
        // if article data not found go to articles
        navigate("/articles");
      }
    } catch (e) {
      console.log(e);
      navigate("/articles");
    }
  };

  useEffect(() => {
    // runs when page first loads and when article id gets changed
    getData(articleid);
  }, [articleid]);

  // add to favorite funcion
  const add = async () => {
    await addToFavorite(article._id);
  };

  // rendering ui
  if (loading) {
    return (
      <div className="loadingscreen">
        <h2 className="mt-2" style={{ fontSize: "45px", color: "white" }}>
          Loading...
        </h2>
      </div>
    );
  } else {
    return (
      <>
        <Header user={user} />
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
            <p
              className="price-txt"
              dangerouslySetInnerHTML={{ __html: article.description }}
            ></p>

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
  }
};

export default Article;
