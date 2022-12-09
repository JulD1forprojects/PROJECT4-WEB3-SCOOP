import { BrowserRouter, Routes, Route } from "react-router-dom"; // setting app redirection router
import { useAppContext } from "../context/UseAppContext"; // importing app ontect to get user and loading state

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
  const { user, loading } = useAppContext(); // getting user and loading state from app state

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
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/categories" element={<Categories />} />
          <Route
            exact
            path="/categoryarticles/:category"
            element={<CategoryArticles />}
          />
          <Route exact path="/articles" element={<Articles />} />
          <Route exact path="/article/:articleid" element={<Article />} />
          <Route exact path="/favorites" element={<Favorites />} />
          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path="/signup" element={<SignUp />} />

          <Route path="*" element={<NotFound loading={loading} />} />
        </Routes>
      </BrowserRouter>
    );
  } else if (user._id) {
    // if user provide all pages except signin and signup page
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home user={user} />} />
          <Route
            exact
            path="/categories"
            element={<Categories user={user} />}
          />
          <Route
            exact
            path="/categoryarticles/:category"
            element={<CategoryArticles user={user} />}
          />
          <Route exact path="/articles" element={<Articles user={user} />} />
          <Route
            exact
            path="/article/:articleid"
            element={<Article user={user} />}
          />
          <Route exact path="/favorites" element={<Favorites user={user} />} />
          <Route
            exact
            path="/myarticles"
            element={<MyArticles user={user} />}
          />

          <Route path="*" element={<NotFound loading={loading} />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default AppRouter;
