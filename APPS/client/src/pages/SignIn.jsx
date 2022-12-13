import React, { useState } from "react"; // react with state to hold email password
import { Link } from "react-router-dom"; // link to redirect to other page
import { useAppContext } from "../context/UseAppContext"; // getting app context to use login function
import { useNavigate } from "react-router-dom"; // for navigate mothod

const SignIn = () => {
  const { logIn } = useAppContext(); // get login method from app context
  const navigate = useNavigate(); // navigate method to navigate to other page

  const [email, setEmail] = useState(""); // state for email
  const [password, setPassword] = useState(""); // state for password

  //! login function
  const loginnow = async () => {
    //! calling login function
    const result = await logIn(email, password);

    console.log(result);

    // if login is successful go to home page
    if (result.success && result.success === true) {
      navigate("/");
    }
  };

  // rendering ui
  return (
    <>
      <div className="loginbody">
        <div className="login-page">
          <div className="loginform">
            <h3>Login Now</h3>
            <br />
            <div className="login-form">
              <input
                type="email"
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
              <button onClick={loginnow}>login</button>
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
