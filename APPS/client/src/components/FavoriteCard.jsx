import React from "react"; // react

const ArticleCard = () => {
  return (
    <>
      {/* article card */}
      <div className="col-md-12">
        <div className="card">
          <div className="card-content">
            <p className="description"></p>
            <br />
            <button className="btn btn-danger">Remove Favorite</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleCard;
