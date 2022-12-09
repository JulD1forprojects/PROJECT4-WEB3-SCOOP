import { createContext, useContext, useEffect, useState } from "react"; // getting neccery method for creating app contect
import axios from "axios"; // importing axios to make api calls
import { toast } from "react-toastify"; // import toast to show success or error messages

const AppContext = createContext(); // creating context

export function UseAppContextProvider({ children }) {
  const [user, setUser] = useState({}); // setting user state empty by default
  const [articles, setArticles] = useState([]); // setting articles stateempty by default
  const [categories, setCategories] = useState([]); // setting categories state empty by default
  const [featuredarticles, setFeaturedArticles] = useState([]); // setting featured articles state empty by default
  const [favorites, setFavorites] = useState([]); // setting favorites item state empty by default
  const [loading, setLoading] = useState(true); // setting loading state true by default
  const [status, setStatus] = useState("start"); // set state for app start by default

  //! login function
  async function logIn(email, password) {
    // set load to true
    setLoading(true);

    try {
      // make api call to backend
      const { data } = await axios.post("http://localhost:4000/api/v1/login", {
        email,
        password,
      });
      console.log(data);

      // set user to user state
      setUser(data.user);

      // loading false
      setLoading(false);

      return data;
    } catch (err) {
      // Handle Error Here
      console.error(err);
      toast.error(err.response.data.message);
      setLoading(false);
      return err.response.data;
    }
  }

  //! signup function
  async function createAccount(name, email, password) {
    // loading true
    setLoading(true);
    try {
      // make api call
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/register",
        {
          name,
          email,
          password,
        }
      );
      console.log(data);

      // set user to user state
      setUser(data.user);
      setLoading(false);

      return {
        success: true,
      };
    } catch (err) {
      // Handle Error Here
      console.error(err);
      toast.error(err.response.data.message);

      setLoading(false);
      return err.response.data;
    }
  }

  //! logout functuion
  async function logOut() {
    // loading true
    setLoading(true);
    try {
      // make api call
      const { data } = await axios.get("http://localhost:4000/api/v1/logout");

      // set user state to empty
      setUser({});

      // loading false
      setLoading(false);

      return data;
    } catch (err) {
      // Handle Error Here
      console.error(err);
      toast.error(err.response.data.message);

      setLoading(false);
      return err.response.data;
    }
  }

  //! getting articles

  async function getData() {
    try {
      // getting articles from api call
      const { data } = await axios.get(`http://localhost:4000/api/v1/articles`);
      console.log(data);

      // set articles to articles state
      setArticles(data.articles);
    } catch (e) {
      console.log(e);
      toast.error(e.response.data.message);
      return e.response.data;
    }
  }

  //! getting categories
  async function getCategories() {
    try {
      // getting categories from api call
      const { data } = await axios.get(
        `http://localhost:4000/api/v1/categories`
      );
      console.log(data);

      // set categories to categories state
      setCategories(data.categories);
    } catch (e) {
      console.log(e);
      toast.error(e.response.data.message);
      return e.response.data;
    }
  }

  //! getting featured articles
  async function getFeaturedArticles() {
    // initializing empty array to store unique category id
    const uniqueIds = [];

    // get all articles from api
    const { data } = await axios.get(`http://localhost:4000/api/v1/articles`);
    console.log(data);

    // filter only one product from each category
    const unique = data.articles.filter((element) => {
      if (element.category) {
        console.log(element.category._id);
        const isDuplicate = uniqueIds.includes(element.category._id);

        if (!isDuplicate) {
          uniqueIds.push(element.category._id);

          return true;
        }

        return false;
      }
    });

    console.log(unique);

    // set unique articles to featured articles state

    setFeaturedArticles(unique);
  }

  //! adding article to favorites
  async function addToFavorite(articleid, quantity) {
    // find article from articles by id
    let producttoadd = articles.find((article) => article._id === articleid);
    //check if the action id exists in the addedItems
    let existed_item = favorites.find((article) => articleid === article._id);
    if (existed_item) {
      console.log(existed_item);

      toast.info("Item Already In Favorites");
    } else {
      // update app state to update favorites
      setStatus("update");

      // set favorites items
      setFavorites((prevItems) => [...prevItems, producttoadd]);

      // show success message
      toast.success("Article Added To Favorites");
    }
  }

  //! removing item from favorites
  async function removeFromFavorites(id) {
    // filter items by removing the article by given id
    setFavorites((prevItems) => prevItems.filter((item) => item._id !== id));
  }

  // clean favorites
  async function cleanFavorites() {
    // remove all items
    localStorage.removeItem("favorites");

    setFavorites([]);
  }

  useEffect(() => {
    //loading true
    setLoading(true);

    const unsubscribe = async () => {
      setLoading(true);

      try {
        // verify token, check if user is logged in

        const { data } = await axios.get("http://localhost:4000/api/v1/me");

        // set user to state
        setUser(data.user);

        // loading false
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }

      await getData(); // get articles
      await getCategories(); // get categories
      await getFeaturedArticles(); // get featured articles

      const favoritesData = JSON.parse(localStorage.getItem("favorites")); // get favorites items

      if (favoritesData) {
        console.log("items present");
        console.log(favoritesData);
        setStatus("update"); // update app state
        setFavorites(favoritesData); // set favorites items in favorites state
        setLoading(false); // loading false
      }
    };

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (status === "update") {
      // if favorites get updated then set item to localstorage
      console.log(favorites);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  }, [favorites, status]);

  //! return all functions as a component with all props
  return (
    <AppContext.Provider
      value={{
        user,
        logIn,
        createAccount,
        loading,
        logOut,
        addToFavorite,
        articles,
        removeFromFavorites,
        favorites,
        cleanFavorites,
        categories,
        featuredarticles,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

// export the whole context
export function useAppContext() {
  return useContext(AppContext);
}
