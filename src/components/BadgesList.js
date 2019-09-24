import React from 'react';
import './styles/BadgesList.css'
import logoTwitter from '../images/twitter-logo.svg'

function BadgeList ({data}) {
 return(
  <div className="BadgesList">
    <ul>
    {data.map((badge) => {
      return (
        <li className="list-unstyled BadgesListItem" 
            key={badge.id}
        >
          <img src={badge.avatarUrl} 
               alt="avatar"
               className="BadgesListItem__avatar" />
          <div className="BadgesList__info">
            <ul className="list-unstyled">
              <li><h4>{badge.firstName} {badge.lastName}</h4></li>
              <li> 
                <div className="BadgesListItem__twitter">
                  <img src={logoTwitter} alt="logoTwitter"/>
                  <p>@{badge.twitter}</p>
                </div>
              </li>
              <li><p>{badge.jobTitle}</p></li>
            </ul>          
          </div>     
        </li>
      )
    })}
    </ul>
  </div>
 )
}

export default BadgeList;