import React, { useState } from 'react';

import './Pricing.scss'

import Price from './Price/Price'

const Pricing = () => {
  const [benefits] = useState(['Mencatat barang masuk dan keluar', 'Mencatat Keuntungan', 'Dapat menganalisa hasil penjualan dengan CHART', 'Support 7x24 Jam', 'Export data ke Excel', 'AI Prediksi penghasilan'])
  const [basic] = useState([true, true, false, false, false, false])
  const [business] = useState([true, true, true, true, false, false])
  const [entrepreneur] = useState([true, true, true, true, true, true])

  return (
    <div className="mt-4">
      <h3 id="pricing" className="text-center"><b>Pricing</b></h3>
      <div className="d-flex flex-wrap ml-5 mr-5 p-5 justify-content-around">
        <Price className="justify-content-around"
        key={1}
        price='48'
        category='basic'
        benefits={benefits}
        booleans={basic}
        color={'btn-primary'}/>
        <Price className="justify-content-around"
        key={2}
        price='88'
        category='business'
        benefits={benefits}
        booleans={business}
        color={'btn-primary'}/>
        <Price className="justify-content-around"
        key={3}
        price='128'
        category='entrepreneur'
        benefits={benefits}
        booleans={entrepreneur}
        color={'btn-primary'}/>
      </div>
    </div>
  );
}

export default Pricing;
