import React from 'react';
import confLogo from '../images/badge-header.svg'
import '../components/styles/Badge.css'

class Badge extends React.Component {
  render()
  {
    return (
      <>
      <section className="Badge">
        <div className="Badge__header">
          <img 
          src={confLogo}
          alt="conf-logo"/>
        </div>
        <div className="Badge__section-name">
          <img 
          src={this.props.avatarUrl}
          alt="avatar"
          className="Badge__avatar"/>
          <h1>{this.props.firstName} <br/>{this.props.lastName}</h1>
        </div>
        <div className="Badge__section-info">
          <h3>{this.props.jobTitle}</h3>
          <div>@{this.props.twitter}</div>
        </div>
        <div className="Badge__footer">
          #platziconf
        </div>
      </section>
      </>
    )
  }
}

export default Badge