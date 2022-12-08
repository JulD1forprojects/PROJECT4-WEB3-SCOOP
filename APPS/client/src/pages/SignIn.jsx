import React from "react"; // react

const SignIn = () => {
  return (
    <>
      <div className="loginbody">
        <div className="login-page">
          <div className="loginform">
            <h3>Login Now</h3>
            <br />
            <div className="login-form">
              <input type="email" placeholder="Email Address" />
              <input type="password" placeholder="Password" />
              <button>login</button>
            </div>
            <br />
            <p className="message">
              Not registered? <Link to="/signup">Create an account</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
