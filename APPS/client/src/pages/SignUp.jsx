import React, { useState } from "react"; // react with state to hold email and password
import { Link } from "react-router-dom"; // link to redirect to other page
import { useAppContext } from "../context/UseAppContext"; // getting app context
import { useNavigate } from "react-router-dom"; // navigate method to redirect after login
const SignUp = () => {
  const { createAccount } = useAppContext(); // getting create account function from app context
  const navigate = useNavigate(); // navigate method to navigate to other page

  const [name, setName] = useState(""); // state for name
  const [email, setEmail] = useState(""); // state for email
  const [password, setPassword] = useState(""); // state for password

  //! sign up function
  const signupnow = async () => {
    // making function call
    const result = await createAccount(name, email, password);

    // if request get success navigate to home page
    if (result.success === true) {
      navigate("/");
    }
  };

  // rendering ui
  return (
    <>
      <div className="loginbody">
        <div className="login-page">
          <div className="loginform">
            <h3>Create Account</h3>
            <br />
            <form className="register-form">
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button onClick={signupnow}>Create Account</button>
            </form>
            <br />
            <p className="message" style={{ marginTop: "15rem" }}>
              Already registered? <Link to="/signin">Sign In</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
