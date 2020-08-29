import React from 'react';

import './Tiers.css'

import Navigation from '../Navigation/Navigation'
import Basic from './Basic/Basic'
import Business from './Business/Business'
import Entrepreneur from './Entrepreneur/Entrepreneur'
// import Support from './Support/Support'

const Tiers = () => {
  return (
    <div className="pl-5 pr-5 homes">
      <Navigation />
      { window.location.pathname !== "/tiers/basic" &&
        <Business />
      }
      { window.location.pathname === "/tiers/entrepreneur" &&
        <Entrepreneur />
      }
      <Basic />
      {/* { window.location.pathname === "/tiers/entrepreneur" &&
        <Support />
      } */}
    </div>
  );
}

export default Tiers;
