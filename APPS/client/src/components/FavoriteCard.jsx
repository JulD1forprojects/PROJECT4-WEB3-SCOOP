import React from "react";
import { useAppContext } from "../context/UseAppContext"; // importing context to get addtocart method
import { useNavigate } from "react-router-dom"; // to get method for redirection between pages

const ArticleCard = ({ article }) => {
  const { removeFromFavorites } = useAppContext(); // addtocart method from context op app
  const navigate = useNavigate(); // navigate method for redirection between pages

  // to add article into cart
  const remove = async (id) => {
    console.log(id);
    await removeFromFavorites(id);
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
              className="btn btn-danger"
              onClick={() => remove(article._id)}
            >
              Remove Favorite
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleCard;
