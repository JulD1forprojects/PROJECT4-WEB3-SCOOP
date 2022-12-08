import React from "react";
import Header from "../components/Header"; // header
import Footer from "../components/Footer"; // footer

const Profile = () => {
  return (
    <>
      <Header />
      <br />
      <h2 className="text-center">Profile</h2>
      <br />

      <div className="d-flex justify-content-center mt-2">
        <button className="btn btn-danger">Logout</button>
      </div>
      <br />
      <br />
      <Container>
        <div className="row">
          <div className="col-md-8">
            <h2>My Articles</h2>

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
                <input className="form-control" placeholder="Enter Full Name" />
              </div>
              <br />
              <div className="form-control">
                <label>Email Address</label>
                <input
                  className="form-control"
                  placeholder="Enter Email Address"
                />
              </div>

              <div className="d-flex justify-content-center mt-2">
                <button className="btn btn-myprimary">Update Profile</button>
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
                />
              </div>
              <br />
              <div className="form-control">
                <label>New Password</label>
                <input
                  className="form-control"
                  type="password"
                  placeholder="Enter New Password"
                />
              </div>
              <br />

              <div className="form-control">
                <label>Confirm New Password</label>
                <input
                  className="form-control"
                  type="password"
                  placeholder="Re-Enter New Password"
                />
              </div>
              <div className="d-flex justify-content-center mt-2">
                <button className="btn btn-myprimary">Update Password</button>
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
