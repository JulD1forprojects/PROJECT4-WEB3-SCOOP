import React from "react"; // react
import { useAppContext } from "../context/UseAppContext"; // importing context to get addToFavorite method
import { Link } from "react-router-dom"; // to get method for redirection between pages
const ArticleCard = ({ article }) => {
  const { addToFavorite } = useAppContext(); // addToFavorite method from context op app

  //! function to add article into favorites
  const add = async (id) => {
    console.log(id);
    await addToFavorite(id);
  };

  // rendering ui
  return (
    <>
      {/* article card */}
      <div className="col-md-12">
        <div className="card">
          <div className="card-content">
            {/* article description */}
            <h6 className="text-purple">By {article.user.name}</h6>
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
