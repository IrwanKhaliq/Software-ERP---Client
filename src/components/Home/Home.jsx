import React from 'react';

import './Home.scss'

import About from '../About/About'
import Pricing from '../Pricing/Pricing'
import Navigation from '../Navigation/Navigation'

const Home = () => {

  return (
    <div className="homes">
      <Navigation />
      <div className="mr-5 ml-5">
        <p
          className="text-center"
          style={{ paddingLeft: '40vw', paddingTop: '5vw' }}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing 
          elit. Dicta
          <br/>
          aliquid commodi natus sit sapiente architecto neque 
          veritatis dolore velit!
        </p>
        <div className="mt-20">
          <q>
            Excepteur sint accaecat cupidadat non proident
          </q>
          <br/>
          <img
            src="https://devtron.ai/images/undraw_metrics_gtu7.svg"
            width="250"
            height="250"
            alt="metric undraw"
          />
        </div>
      </div>
      <About />
      <Pricing />
    </div>
  );
}

export default Home;
