import React = require('react');

// import React, { useState } from "react"

export default function (props) {
  let [authMode, setAuthMode] = React.useState('signin');

  const changeAuthMode = (props) => {
    // if (props === 'signin') {
    //   setAuthMode((authMode = 'signin'));
    // }
    // if (props === 'signup') {
    //   setAuthMode((authMode = 'signup'));
    // }
    // if (props === 'home') {
    //   setAuthMode((authMode = 'home'));
    // }
    setAuthMode(authMode === 'signin' ? 'signup' : 'signin');
  };

  const changePage = (page) => {
    // if (page === 'signin') {
    setAuthMode((authMode = 'signin'));
    // React.useState('signin');
    // }
    // if (props === 'signup') {
    //   setAuthMode((authMode = 'signup'));
    //   React.useState('signin');
    // }
  };

  const changePage2 = (page) => {
    // if (page === 'signin') {
    // setAuthMode((authMode = 'signin'));
    // React.useState('signin');
    // }
    // if (props === 'signup') {
    setAuthMode((authMode = 'signup'));
    //   React.useState('signin');
    // }
  };
  if (authMode === 'signin') {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>

            <button onClick={changePage}>Home</button>
            <button onClick={changePage2}>in</button>

            <div className="text-center">
              Not registered yet?{' '}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>

            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="text-center mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </form>
      </div>
    );
  } else if (authMode === 'signup') {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Already registered?{' '}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign In
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Full Name</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="e.g Jane Doe"
              />
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Email Address"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="text-center mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </form>
      </div>
    );
  } else if (authMode === 'home') {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Welcome Home Boy</h3>
          </div>
        </form>
      </div>
    );
  }
}
