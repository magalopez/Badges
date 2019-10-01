import React from 'react'
import {Link} from 'react-router-dom';

import './styles/BadgesHome.css'
import confLogo from '../images/platziconf-logo.svg'
import astronauts from '../images/astronauts.svg'

function BadgesHome () {
  return (
    <>
    <div className="BadgesHome">
      <div className="row">
        <div className="col-6">
          <div className="BadgesHome__info">
            <img src={confLogo} alt="confLogo"/>
            <h1>Print your badges</h1>
            <p>The easiest way to manage your conference</p>
            <Link to="/badges"
                  className="btn btn-primary btn-start"
            >Get Start</Link>
          </div>
        </div>
        <div className="col-6">
          <figure className="BadgesHome__astro">
            <img src={astronauts} alt="astronauts"/>
          </figure>
        </div>
      </div>
    </div>
    </>
  )
}

export default BadgesHome;