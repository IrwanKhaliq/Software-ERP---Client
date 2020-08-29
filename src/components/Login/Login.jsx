import React from 'react';
import { Link } from 'react-router-dom'

import './Login.css'

import Navigation from '../Navigation/Navigation'

const Login = () => {
  return (
    <div className="logins">
    <Navigation />
    <div className="d-flex justify-content-center mt-5" style={{ paddingBottom: '7vw' }}>
      <form className="w-50 text-center">
        <h1 className="pb-5">Login</h1>
        <div className="form-group">
          <label htmlFor="">Email</label>
          <input type="email" className="form-control" placeholder="Enter email" />
          <small className="form-text text-muted">We'll keep your privacy.</small>
        </div>
        <div className="form-group">
          <label htmlFor="">Password</label>
          <input type="password" className="form-control" placeholder="Enter password" />
        </div>
        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </Link>
        <small>Don't have an account?</small>
        <div className="d-flex flex-wrap justify-content-center mb-5">
          <div className="card mr-1 ml-1" style={{ width: '50px' }}>
            <img src="https://img.icons8.com/color/48/000000/google-logo.png" className="card-img" alt="social account"/>
          </div>
          <div className="card mr-1 ml-1" style={{ width: '50px' }}>
            <img src="https://img.icons8.com/ios-glyphs/48/000000/github.png" className="card-img" alt="social account"/>
          </div>
          <div className="card mr-1 ml-1" style={{ width: '50px' }}>
            <img src="https://img.icons8.com/color/48/000000/facebook-new.png" className="card-img" alt="social account"/>
          </div>
          <div className="card mr-1 ml-1" style={{ width: '50px' }}>
            <img src="https://img.icons8.com/fluent/48/000000/linkedin.png" className="card-img" alt="social account"/>
          </div>
        </div>
      </form>
    </div>
    </div>
  );
}

export default Login;
