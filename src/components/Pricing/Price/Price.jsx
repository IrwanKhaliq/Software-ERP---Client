import React from 'react';
import { Link } from 'react-router-dom'

import './Price.css'

const Price = ({ price, category, benefits, booleans, color }) => {

  return (
    <div className="mt-4 mb-4">
    <h4 className="text-center"><b>{ (category).toUpperCase() }</b></h4><br/>
    <h2 className="text-center">$ { price } <small>/ month</small></h2>
    <div className="card w-18">
      <ul className="list-group list-group-flush">
        { benefits.map((el, i) => (
          <li className="list-group-item text-center">
            { booleans[i] && <img src="https://img.icons8.com/emoji/20/000000/check-mark-emoji.png" alt="check icon"/> } 
            { !booleans[i] && <img src="https://img.icons8.com/emoji/20/000000/cross-mark-emoji.png" alt="cross icon"/> } 
            <br/>
            { el }
          </li>
          ))
        }
      </ul>
    </div><br/>
    <Link to={`/tiers/${category}`}>
      <button type="button" class={`btn ${color} w-100`}>Try</button>
    </Link>
    </div>
  );
}

export default Price;
