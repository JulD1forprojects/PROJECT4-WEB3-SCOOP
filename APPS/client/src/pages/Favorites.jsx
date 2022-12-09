import React from "react";
import Header from "../components/Header"; // header
import FavoriteCard from "../components/FavoriteCard"; // article card
import { Container } from "react-bootstrap"; // conteiner for ui
import Footer from "../components/Footer"; // footer
import { useAppContext } from "../context/UseAppContext"; // app contexxt for getting articles

const Favorites = ({ user }) => {
  const { favorites } = useAppContext(); // getting articles

  console.log(favorites);

  // rendering ui
  return (
    <>
      <Header user={user} />
      <br />
      <h2 className="text-center">My Favorites Articles</h2>
      <br />
      <Container>
        <div className="row">
          {/* reding produt card for all articles */}

          {favorites &&
            favorites.map((v, i) => {
              return <FavoriteCard key={i} article={v} />;
            })}
        </div>
      </Container>
      <br />
      <Footer />
    </>
  );
};

export default Favorites;
