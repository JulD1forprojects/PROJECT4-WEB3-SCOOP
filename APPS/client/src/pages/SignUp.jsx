import React from "react"; // react

const SignUp = () => {
  return (
    <>
      <div className="loginbody">
        <div className="login-page">
          <div className="loginform">
            <h3>Create Account</h3>
            <br />
            <form className="register-form">
              <input type="text" placeholder="Full Name" />
              <input type="text" placeholder="Email Address" />

              <input type="password" placeholder="Password" />

              <button>Create Account</button>
            </form>
            <br />
            <p className="message">
              Already registered? <Link to="/signin">Sign In</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
