import React, { useState } from "react";
import Header from "../components/Header";
import { Container } from "react-bootstrap";
import Footer from "../components/Footer";
import { useAppContext } from "../context/UseAppContext";

import CategoryCard from "../components/CategoryCard";
const Categories = ({ user }) => {
  const { categories } = useAppContext(); // getting categories from app state

  // rendering ui
  return (
    <>
      <Header user={user} />
      <br />
      <h2 className="text-center">All Categories</h2>
      <br />
      <Container>
        <div className="row">
          {categories &&
            categories.map((v, i) => {
              return (
                <div className="col-md-3">
                  <CategoryCard key={i} category={v} />
                </div>
              );
            })}
        </div>
      </Container>
      <br />
      <Footer />
    </>
  );
};

export default Categories;
