import React from 'react';
import './styles/BadgeNew.css'
import header from '../images/badge-header.svg';
import Badge from '../components/Badge';
import BadgeForm  from '../components/BadgeForm'

class BadgeNew extends React.Component {
  state = {form: {
    firstName : '',
    lastName: '',
    email: '',
    jobTitle: '',
    twitter: '',
    avatarUrl: '',
  }}

  handleChange = (e) => {
    this.setState({
      form : {
        ...this.state.form,
        [e.target.name] : e.target.value,
      }
    })
  }

  render()
  {
    return(
      <>
        <div>
          <div className="BadgeNew__hero">
            <img className="img-fluid" src={header} alt="Logo"/>
          </div>
          <div className="container">
            <div className="row">
              <div className="col">
                <Badge firstName={this.state.form.firstName}
                       lastName={this.state.form.lastName}
                       jobTitle={this.state.form.jobTitle}
                       twitter={this.state.form.twitter}
                       avatarUrl={this.state.form.avatarUrl} />
              </div>
              <div className="col">
                <BadgeForm 
                     onChange={this.handleChange}
                     formValues={this.state.form}
                     />
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default BadgeNew;