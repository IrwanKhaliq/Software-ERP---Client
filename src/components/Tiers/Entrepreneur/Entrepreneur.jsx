import React from 'react';

import './Entrepreneur.css'

const Entrepreneur = () => {
  return (
    <div className="d-flex flex-wrap justify-content-center pt-5">
      <div className="card mr-2 pt-2 mb-2" style={{ minWidth: '600px', height: '70px' }}>
        <div className="d-flex flex-wrap justify-content-around">
          <p className="m-auto">Export data to Excel</p>
          <select id="card_type" name="card_type" className="custom-select mt-1 mb-1 mr-auto ml-auto" style={{ width: '100px' }}>
            <option value="" selected>Choose</option>
            <option value="march">March</option>
            <option value="april">April</option>
            <option value="may">May</option>
            <option value="june">June</option>
            <option value="july">July</option>
            <option value="august">August</option>
          </select>
          <button type="button" class="btn btn-primary justify-content-end w-50 mt-1 mb-1 mr-auto ml-auto">Export</button>
        </div>
      </div>
      <div className="card ml-2 mb-5" style={{ minWidth: '600px' }}>
        <div className="d-flex flex-wrap justify-content-around">
          <p className="m-auto">Analyst</p>
          <select id="card_type" name="card_type" className="custom-select mt-3 mb-3 mr-auto ml-auto" style={{ width: '100px' }}>
          <option value="" selected>Choose</option>
            <option value="product1">Product 1</option>
            <option value="product2">Product 2</option>
            <option value="product3">Product 3</option>
            <option value="product4">Product 4</option>
            <option value="product5">Product 5</option>
          </select>
          <div className="w-50 d-flex justify-content-around">
            <button type="button" className="btn btn-primary justify-content-end mt-3 mb-3 mr-auto ml-auto">Start Analyst</button>
            <button type="button" className="btn btn-success justify-content-end  mt-3 mb-3 mr-auto ml-auto">Buy</button>
            <button type="button" className="btn btn-danger justify-content-end  mt-3 mb-3 mr-3 ml-auto">Sell</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Entrepreneur;
