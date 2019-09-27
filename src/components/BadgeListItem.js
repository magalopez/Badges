import React from 'react';
import logoTwitter from '../images/twitter-logo.svg'
import Gravatar from './Gravatar';
import './styles/BadgesList.css'


class BadgeListItem extends React.Component {
  render() {
    return (
      <div className="BadgesListItem">
      <Gravatar email={this.props.badge.email} 
      alt="avatar"
      className="BadgesListItem__avatar" 
      />
      <div className="BadgesList__info">
        <ul className="list-unstyled">
          <li><h4>{this.props.badge.firstName} {this.props.badge.lastName}</h4></li>
          <li> 
            <div className="BadgesListItem__twitter">
              <img src={logoTwitter} alt="logoTwitter"/>
              <p>@{this.props.badge.twitter}</p>
            </div>
          </li>
          <li><p>{this.props.badge.jobTitle}</p></li>
        </ul>          
      </div>  
      </div>
    )
  }
}

export default BadgeListItem


