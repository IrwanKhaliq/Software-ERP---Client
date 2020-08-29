import React from 'react';

const Profit = () => {
  return (
    <div>
      <h4>Laporan Profit</h4>
      <table class="table table-hover">
        <thead>
          <tr className="table-primary">
            <th scope="col">Bulan /<br/>Tahun</th>
            <th scope="col">Profit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">March 2020</th>
            <td><b>5,000,000</b></td>
          </tr>
          <tr>
            <th scope="row">April 2020</th>
            <td><b>10,000,000</b></td>
          </tr>
          <tr>
            <th scope="row">May 2020</th>
            <td><b>20,000,000</b></td>
          </tr>
          <tr>
            <th scope="row">Juni 2020</th>
            <td><b>40,000,000</b></td>
          </tr>
          <tr>
            <th scope="row">July 2020</th>
            <td><b>80,000,000</b></td>
          </tr>
          <tr>
            <th scope="row">Agustus 2020</th>
            <td><b>160,000,000</b></td>
          </tr>
          <tr className="table-light">
            <td>
              <div className="input-group input-group-sm mb-3">
                <input type="date" className="form-control text-center" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
              </div>
            </td>
            <td>
              <div className="input-group input-group-sm mb-3">
                <input type="text" className="form-control text-center" placeholder="profit"  aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
              </div>
            </td>
          </tr>
          <tr>
            <th>Total Profit</th>
            <td><b>300,000,000</b></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Profit;
