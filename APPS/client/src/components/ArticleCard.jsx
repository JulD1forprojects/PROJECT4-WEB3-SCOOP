import React from "react"; // react
import { useAppContext } from "../context/UseAppContext"; // importing context to get addtocart method
import { useNavigate, useLocation } from "react-router-dom"; // to get method for redirection between pages
const ArticleCard = ({ article }) => {
  const { addToFavorite } = useAppContext(); // addtocart method from context op app
  const navigate = useNavigate(); // navigate method for redirection between pages
  const location = useLocation();

  // function to add article into cart
  const add = async (id) => {
    console.log(id);
    await addToFavorite(id);
  };

  // redirect to article page function
  const gotoarticle = (id) => {
    // navigate to article page with article id
    navigate(`/article/${id}`);
  };

  // rendering ui
  return (
    <>
      {/* article card */}
      <div className="col-md-12">
        <div className="card">
          <div className="card-content">
            {/* article description */}
            <h2>{article.title}</h2>
            <p className="description">{article.description}</p>
            <br />
            <button
              className="btn btn-myprimary"
              onClick={() => add(article._id)}
            >
              Add To Favorite
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleCard;
