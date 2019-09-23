import React from 'react';

class BadgeForm extends React.Component {
  state = {}

  // handleChange = (e) => {
  //   this.setState({
  //     // form : {
  //       ...this.state.form,
  //       [e.target.name] : e.target.value,
  //     // }
  //   })
  // }
 

  handleClick = () => {
    console.log('Button was Clicked')
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('NOsubmit')
    console.log(this.props.formValues)
  }

  render()
  {
    return (
      <>  
        <div>
          <h1>New Attendant</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>First Name</label>
              <input type="text" 
                     name="firstName"
                     className="form-control"
                     onChange={this.props.onChange}
                     value={this.props.formValues.firstName}/>
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" 
                     name="lastName"
                     className="form-control"
                     onChange={this.props.onChange}
                     value={this.props.formValues.lastName}/>
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" 
                     name="email"
                     className="form-control"
                     onChange={this.props.onChange}
                     value={this.props.formValues.email}/>
            </div>
            <div className="form-group">
              <label>Job Title</label>
              <input type="text" 
                     name="jobTitle"
                     className="form-control"
                     onChange={this.props.onChange}
                     value={this.props.formValues.jobTitle}/>
            </div>
            <div className="form-group">
              <label>Twitter</label>
              <input type="text" 
                     name="twitter"
                     className="form-control"
                     onChange={this.props.onChange}
                     value={this.props.formValues.twitter}/>
            </div>
            <div className="form-group">
              <label>Avatar Url</label>
              <input type="text" 
                     name="avatarUrl"
                     className="form-control"
                     onChange={this.handleChange}
                     value={this.props.formValues.avatarUrl}/>
            </div>
            <button className="btn btn-primary"
                    onClick={this.handleClick}
                    >Save
            </button>
          </form>
        </div>
      </>
    )
  }
}

export default BadgeForm;