import React from "react"; // react
import { useAppContext } from "../context/UseAppContext"; // importing context to get addToFavorite method
import { Link } from "react-router-dom"; // to get method for redirection between pages

const FavoriteArticleCard = ({ article }) => {
  const { removeFromFavorites } = useAppContext(); // addToFavorite method from context op app

  //! to remove article from favorites
  const remove = async (id) => {
    console.log(id);
    await removeFromFavorites(id);
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
            <p
              className="description"
              dangerouslySetInnerHTML={{ __html: article.description }}
            ></p>
            <Link
              to={`/article/${article._id}`}
              className="text-decoration-none text-black"
              style={{ fontWeight: "bold" }}
            >
              Read More...
            </Link>

            <br />
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

export default FavoriteArticleCard;
