import React from "react";

// importing all pages
import NotFound from "../pages/NotFound";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Articles from "../pages/Articles";
import Article from "../pages/Article";
import Home from "../pages/Home";
import Categories from "../pages/Categories";
import CategoryArticles from "../pages/CategoryArticles";
import MyArticles from "../pages/MyArticles";
import Favorites from "../pages/Favorites";

function AppRouter() {
  // if loading render loading
  if (loading) {
    return (
      <>
        <div className="loadingscreen">
          <h2 className="mt-2" style={{ fontSize: "45px", color: "white" }}>
            Loading...
          </h2>
        </div>
      </>
    );
  } else if (!user || !user._id) {
    // if user is not signed up or logged in - provide all pages except signin and signup page
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" />
          <Route exact path="/categories" />
          <Route exact path="/categoryarticles/:category" />
          <Route exact path="/articles" />
          <Route exact path="/article/:articleid" />
          <Route exact path="/favorites" />
          <Route exact path="/signin" />
          <Route exact path="/signup" />

          <Route path="*" />
        </Routes>
      </BrowserRouter>
    );
  } else if (user._id) {
    // if user is logged in - provide all pages except signin and signup page
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" />
          <Route exact path="/categories" />
          <Route exact path="/categoryarticles/:category" />
          <Route exact path="/articles" />
          <Route exact path="/article/:articleid" />
          <Route exact path="/favorites" />
          <Route exact path="/myarticles" />

          <Route path="*" />
        </Routes>
      </BrowserRouter>
    );
  }
}
export default AppRouter;
