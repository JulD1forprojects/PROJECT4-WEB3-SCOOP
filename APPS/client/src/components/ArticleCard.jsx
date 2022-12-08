import React from "react"; // react

const ArticleCard = () => {
  return (
    <>
      {/* article card */}
      <div className="col-md-12">
        <div className="card">
          <div className="card-content">
            {/* article description */}
            <h2>{article.title}</h2>
            <p className="description"></p>
            <br />
            <button className="btn btn-myprimary">Add To Favorite</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleCard;
