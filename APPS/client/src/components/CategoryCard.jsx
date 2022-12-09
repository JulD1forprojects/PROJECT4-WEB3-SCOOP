// importing libraries
import React from "react"; // react
import { useNavigate, useLocation } from "react-router-dom"; // to get method for redirection between pages

const CategoryCard = ({ category }) => {
  const navigate = useNavigate(); // navigate method for navigation to other screen
  const location = useLocation(); // to get current page location

  // function to go navigation to page
  const gotocategory = async (category) => {
    // navigate ro category product page with category id
    navigate(`/categoryproducts/${category}`);
  };

  // rendering ui
  return (
    <>
      {/* category cart */}
      <div className="card">
        <div
          className={
            location.pathname === "/" ? "card-imagehome" : "card-image"
          }
        >
          {/* category image */}
          <img src={category.image} alt={category.category} />
        </div>
        {/* category name */}
        <div className="card-content" style={{ marginTop: 0 }}>
          <h3
            className="description text-center"
            style={{ cursor: "pointer" }}
            onClick={() => gotocategory(category.category)}
          >
            {category.category}
          </h3>
        </div>
      </div>
    </>
  );
};

export default CategoryCard;
