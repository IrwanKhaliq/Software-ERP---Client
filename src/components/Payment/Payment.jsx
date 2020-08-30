import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import './Payment.scss'

import Navigation from '../Navigation/Navigation'

const Payment = () => {
  const [price, setPrice] = useState(48)
  const [category, setCategory] = useState('')

  
  const priceCategory = (e) => {
    let cat = e.target.value
    setCategory(cat)
    if (cat === 'basic') {
      setPrice(48)
    } else if (cat === 'business') {
      setPrice(88)
    } else if (cat === 'entrepreneur') {
      setPrice(128)
    }
  }

  return (
    <div className="bg">
    <Navigation />
    <div className="d-flex justify-content-center w-100" style={{ paddingBottom: "300px", paddingTop: "150px" }}>
      <div>
          <h1 className="text-center"><p style={{ fontSize: '100px' }}>$ {price}</p>/ month</h1>
        <div style={{ minWidth: '100px' }}>
          <small>Category</small>
          <select id="card_type" onChange={priceCategory} value={category} name="card_type" className="custom-select">
            <option value="basic">Basic</option>
            <option value="business">Business</option>
            <option value="entrepreneur">Entrepreneur</option>
          </select>
        </div>
        <div><br/>
          <small>Card Number</small>
          <input type="number" className="form-control" style={{ width: '50vw' }} placeholder="5412 3523 5235 2385" aria-describedby="basic-addon1"/>
          <small className="d-flex justify-content-end">
            <img src="https://img.icons8.com/color/20/000000/mastercard-logo.png" alt="mastercard icon"/>
            <img src="https://img.icons8.com/color/20/000000/visa.png" alt="visa icon"/>
          </small><br/>
          <Link to="/">
            <button type="button" class="btn btn-primary w-100">Buy</button>
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Payment;
