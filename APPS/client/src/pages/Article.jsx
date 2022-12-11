import React, { useEffect, useState } from "react";
import Header from "../components/Header"; // header
import { useParams, useNavigate } from "react-router-dom"; // use param for getting id of article from url, useNavigate for redirect between pages
import axios from "axios"; // axios for api call
import Footer from "../components/Footer"; // footer
import { useAppContext } from "../context/UseAppContext"; // getting app context to add article into favorites
import { Container } from "react-bootstrap";

const Article = ({ user }) => {
  let { articleid } = useParams(); // getting article id from url

  const { addToFavorite } = useAppContext(); // add to favorites function
  const navigate = useNavigate(); // navigate method for redirecting to other pages

  const [article, setArticle] = useState({}); // article state

  const [loading, setLoading] = useState(true); // default loading true

  //! getting article data
  const getData = async (id) => {
    try {
      console.log(id);
      // get article from backend api call
      const { data } = await axios.get(`/api/v1/getarticle/${id}`);
      console.log(data);
      if (data.status === true) {
        // set article into state
        setArticle(data.article);
        let arr = [];
        setLoading(false); // loading false
      } else {
        // if article data not found goto articles
        navigate("/articles");
      }
    } catch (e) {
      console.log(e);
      navigate("/articles");
    }
  };

  useEffect(() => {
    //! runs when page first loads and when article id gets changed
    getData(articleid);
  }, [articleid]);

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
          <Container>
            <h2 className="text-center">Article Detail</h2>
            <br />
            <br />
            <section className="articleprice">
              <h4 className="text-purple">By {article.user.name}</h4>
              <h1 className="text-black">{article.title}</h1>
              <p
                className="price-txt"
                dangerouslySetInnerHTML={{ __html: article.description }}
              ></p>
            </section>
          </Container>
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
