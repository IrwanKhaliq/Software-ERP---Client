import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import './Navigation.scss'


const Navigation = () => {
  const [nav, setNav] = useState(true)
  const [tiers, setTiers] = useState(false)
  const [entre, setEntre] = useState(false)
  const [path] = useState('/login')
  const [homeColor, setHomeColor] = useState('')

  useEffect(() => {
    const route = window.location.pathname
    if (route === '/' || route === '/payment') setHomeColor('text-white')
    if (path === route) {
      setNav(false)
    } else {
      if
      (route === '/tiers/basic' ||
      route === '/tiers/business' ||
      route === '/tiers/entrepreneur') {
        setTiers(true)
        setNav(false)
        if (route !== '/tiers/basic') {
          setEntre(true)
        }
      } else if (route === '/payment') {
        setNav(false)
      }else {
        setNav(true)
      }
    }
  }, [path])

  return (
    <div className="pt-auto">
      <nav className="navbar navbar-light bg-transparent mr-2 ml-2">
        {/* eslint-disable-next-line */}
        <a href="#" className="navbar-brand mt-auto">
          <div className="d-flex">
            <img src="https://i.dlpng.com/static/png/6808130_preview.png" width="50" height="50" className="d-inline-block align-top other-nav-home" alt="" />
            
            <Link to="/" style={{ textDecoration: 'none' }}>
              <h2 className={`mt-1 home ${homeColor} ml-4`}><b>HOME</b></h2>
            </Link>
          </div>
        </a>
        { nav &&
          <div className="d-flex flex-wrap other-nav">
            <a href="#about" style={{ textDecoration: 'none' }} className="mr-4 mt-4 about"><h5><b>ABOUT</b></h5></a>
            <a href="#pricing" style={{ textDecoration: 'none' }} className="mr-4 mt-4 pricing"><h5><b>PRICING</b></h5></a>
            <a href="#contact" style={{ textDecoration: 'none' }} className="mr-4 mt-4 contact"><h5><b>CONTACT</b></h5></a>
            <Link className="mt-3" to="/login"><button type="button" className="btn btn-outline-primary wid-100">Login</button></Link>
          </div>
        }
        { tiers &&
          <div className="d-flex other-nav">
            { entre &&
              <a href="https://react-socket-chat-application.web.app/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }} className="mr-4 mt-4 pricing">
                <img src="https://img.icons8.com/color/35/000000/chat.png" alt="support 24 hours logo"/>
              </a>
            }
            <Link className="mt-3" to="/payment"><button type="button" className="btn btn-outline-primary wid-100 ">Buy</button></Link>
          </div>
        }
      </nav>
    </div>
  );
}

export default Navigation;
