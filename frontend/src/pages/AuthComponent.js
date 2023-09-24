import React, { useState } from 'react';
import './Login-style.css'; // Adjust the path to your CSS file
import logImage from './log.svg'; // Import the image using an import statement
import registerImage from './register.svg';
import { Helmet } from 'react-helmet';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AuthComponent = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const data = { username, password };
    console.log(data)

    try {
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
      if(json.s==true)
      {
        toast.success('🦄 Wow so easy!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
          localStorage.setItem('userData', JSON.stringify(json));
          window.location.href = "/home";
      }
      else{
        toast.error('🦄 Wow so easy!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      }
      console.log(json);
      // You can do something with the response JSON data here.
    } catch (error) {
      console.error(error);
      // Handle the error appropriately on the frontend.
    }
  };


  const handleRegistration = async (e) => {
    e.preventDefault()
    console.log("Registration")
    const data = { username, email, password }
    try {
      const response = await fetch("http://localhost:4000/register", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Registration")
      const json = await response.json();
      console.log(json);
      localStorage.setItem("userData",JSON.stringify(json))
      console.log(JSON.parse(localStorage.getItem("userData")))
      window.location.href = "/home";
    }
    catch (error) {
      console.log(error);
    }
  }


  const handleSignUp = (e) => {
    e.preventDefault();
    console.log({ username, email, password })
  }
  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  return (
    <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="home" className="sign-in-form" onSubmit={handleLogin}>
            <h2 className="title">Sign In</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" onChange={(e) => {
                setUsername(e.target.value)
              }} value={username} />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" onChange={(e) => {
                setPassword(e.target.value)
              }} value={password} />
            </div>
            <input type="submit" value="Login" className="btn1 solid" />

            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>

          <form action="home" className="sign-up-form" onSubmit={handleRegistration}>
            <h2 className="title">Sign Up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" onChange={(e) => {
                setUsername(e.target.value)
              }} value={username} />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" name='email-signup' onChange={(e) => {
                setEmail(e.target.value)
              }} />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" onChange={(e) => {
                setPassword(e.target.value)
              }} value={password} />
            </div>
            <input type="submit" value="Sign Up" className="btn1 solid" />

            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio minus natus est.</p>
            <button className="btn1 transparent" id="sign-up-btn" onClick={handleSignUpClick}>Sign Up</button>
          </div>
          <img src={registerImage} className="image" alt="Sign Up" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio minus natus est.</p>
            <button className="btn1 transparent" id="sign-in-btn" onClick={handleSignInClick}>Sign In</button>
          </div>
          <img src={logImage} className="image" alt="Sign In" />
        </div>
      </div>
      <Helmet>
        <script
          src="https://kit.fontawesome.com/64d58efce2.js"
          crossorigin="anonymous"
        />
      </Helmet>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );

};

export default AuthComponent;
