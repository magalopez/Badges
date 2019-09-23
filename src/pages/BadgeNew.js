import React from 'react';
import './styles/BadgeNew.css'
import Navbar from '../components/Navbar';
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
    avatarURL: ''
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
          <Navbar />
          <div className="BadgeNew__hero">
            <img className="img-fluid" src={header} alt="Logo"/>
          </div>
          <div className="container">
            <div className="row">
              <div className="col">
                <Badge firstName='Maga'
                       lastName='Lopez'
                       jobTitle='Front End Developer'
                       twitter='magalopee'
                       avatarURL='https://s.gravatar.com/avatar/9a30350e8239534ba50b1531efcc4462?s=80' />
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