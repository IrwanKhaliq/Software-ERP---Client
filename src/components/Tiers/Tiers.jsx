import React from 'react';

import './Tiers.scss'

import Navigation from '../Navigation/Navigation'
import Basic from './Basic/Basic'
import Business from './Business/Business'
import Entrepreneur from './Entrepreneur/Entrepreneur'

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
    </div>
  );
}

export default Tiers;
