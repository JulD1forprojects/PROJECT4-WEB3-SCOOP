import React, { useState, useEffect } from "react";
import Header from "../components/Header"; // header
import ArticleCard from "../components/ArticleCard"; // article card
import { Container } from "react-bootstrap"; // conteiner for ui
import Footer from "../components/Footer"; // footer
import { useAppContext } from "../context/UseAppContext"; // app contexxt for getting articles
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Profile = ({ user }) => {
  const [myarticles, setMyArticles] = useState([]);

  const { articles, logOut, updateProfile, updatePassword } = useAppContext(); // get articles from state

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [oldpassword, setOldpassword] = useState("");
  const [newpassword, setNewpassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  useEffect(() => {
    // get category articles
    var newArray = articles.filter(function (el) {
      console.log(el.user);
      console.log(user._id);
      return el.user._id === user._id;
    });

    console.log(newArray);
    const slicedArray = newArray.slice(0, 3);

    setMyArticles(slicedArray);

    setName(user.name);
    setEmail(user.email);
  }, [articles]);

  //! Singout function
  const signout = async () => {
    await logOut();
    navigate("/");
  };

  //! Update Profile function
  const update_profile = async () => {
    if (email === "" || name === "") {
      toast.error("Please Fill Full Form");
    } else {
      await updateProfile(name, email);
    }
  };

  //! Update Password function
  const update_password = async () => {
    if (oldpassword === "" || newpassword === "" || confirmpassword === "") {
      toast.error("Please Fill Full Form");
    } else {
      await updatePassword(oldpassword, newpassword, confirmpassword);
    }
  };
  // rendering ui
  return (
    <>
      <Header user={user} />
      <br />
      <h2 className="text-center">Profile</h2>
      <br />

      <div className="d-flex justify-content-center mt-2">
        <button className="btn btn-danger" onClick={signout}>
          Logout
        </button>
      </div>
      <br />
      <br />
      <Container>
        <div className="row">
          <div className="col-md-8">
            <h2>My Articles</h2>

            <br />
            {/* redering article card for all articles */}

            {myarticles.map((v, i) => {
              return <ArticleCard key={i} article={v} />;
            })}

            <br />

            <Link to="/myarticles" className="btn btn-sm btn-myprimary">
              View All My Articles
            </Link>
          </div>

          <div className="col-md-4">
            <h2>Update Profile</h2>

            <br />

            <div className="card p-2">
              <div className="form-control">
                <label>Full Name</label>
                <input
                  className="form-control"
                  placeholder="Enter Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <br />
              <div className="form-control">
                <label>Email Address</label>
                <input
                  className="form-control"
                  placeholder="Enter Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="d-flex justify-content-center mt-2">
                <button className="btn btn-myprimary" onClick={update_profile}>
                  Update Profile
                </button>
              </div>
            </div>
            <br />

            <h2>Update Password</h2>

            <br />

            <div className="card p-2">
              <div className="form-control">
                <label>Old Password</label>
                <input
                  className="form-control"
                  type="password"
                  placeholder="Enter Old Password"
                  value={oldpassword}
                  onChange={(e) => setOldpassword(e.target.value)}
                />
              </div>
              <br />
              <div className="form-control">
                <label>New Password</label>
                <input
                  className="form-control"
                  type="password"
                  placeholder="Enter New Password"
                  value={newpassword}
                  onChange={(e) => setNewpassword(e.target.value)}
                />
              </div>
              <br />

              <div className="form-control">
                <label>Confirm New Password</label>
                <input
                  className="form-control"
                  type="password"
                  placeholder="Re-Enter New Password"
                  value={confirmpassword}
                  onChange={(e) => setConfirmpassword(e.target.value)}
                />
              </div>
              <div className="d-flex justify-content-center mt-2">
                <button className="btn btn-myprimary" onClick={update_password}>
                  Update Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <br />
      <Footer />
    </>
  );
};

export default Profile;
