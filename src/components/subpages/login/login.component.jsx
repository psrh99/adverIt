import React from "react";
import NavBar from "../../Navbar/NavBar.component";
import "./login.styles.css";
import bgimg from './loginbg.jpg'

const Login = () => (
  <>
    <NavBar/>
    <div className="logindiv">
        {/* <img src={bgimg} alt="" className="loginbg" /> */}
        <div className="login-form">
        <form className="">
            <div className="">
            <label htmlFor="inputEmail4" className="form-label font-weight-bold text-light">
                Email
            </label>
            <input type="email" className="form-control" id="inputEmail4" />
            </div>

            <div className="">
            <label htmlFor="inputPassword4" className="form-label font-weight-bold text-light">
                Password
            </label>
            <input type="password" className="form-control" id="inputPassword4" />
            </div>
            
            <div className="row g-1">
            <button type="submit" className="login-btns">
                Log In
            </button>
            </div>

            <div className="row g-3">
            <label htmlFor="newuser">Please <a href="">sign up here</a> , If you are a new user?</label>
            {/* <button type="submit" className="btn btn-primary">
                Sign Up
            </button> */}
            </div>
        </form>
        </div>
    </div>
  </>
);

export default Login;
