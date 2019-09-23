import React from 'react';

class BadgeForm extends React.Component {

  handleChange = (e) => {
    console.log({name: e.target.name,
                 value: e.target.value})
  }

  handleClick = () => {
    console.log('Button was Clicked')
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('NOsubmit')
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
                     onChange={this.handleChange}/>
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