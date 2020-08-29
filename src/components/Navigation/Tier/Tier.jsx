import React from 'react';
import { Link } from 'react-router-dom'

const Tier = () => {
  return (
    <div className="pt-2">
      <nav className="navbar navbar-light bg-transparent mr-2 ml-2">
        {/* eslint-disable-next-line */}
        <a href="#" className="navbar-brand mt-auto">
          <div className="d-flex">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Blue_circle_for_diabetes.svg/768px-Blue_circle_for_diabetes.svg.png" width="30" height="30" className="d-inline-block align-top" alt="" />
            <Link to="/" style={{ textDecoration: 'none' }}>
              <h5 className="mt-1 home"><b>HOME</b></h5>
            </Link>
          </div>
        </a>
      </nav>
    </div>
  );
}

export default Tier;
