import React from 'react';

class BadgeForm extends React.Component {
  // handleChange = event => {
  //   this.setState({
  //     [event.target.name]: event.target.value,
  //   });
  // };

  handleClick = event => {
    console.log('Button was clicked');
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log('Form was submitted');
    console.log(this.state);
  };

  render() {
    return (
      <>
        <h1>New Attendant</h1>

        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label>First Name</label>
            <input
              onChange={this.props.onChange}
              className='form-control'
              type='text'
              name='firstName'
              value={this.props.formData.firstName}
            />
          </div>

          <div className='form-group'>
            <label>Last Name</label>
            <input
              onChange={this.props.onChange}
              className='form-control'
              type='text'
              name='lastName'
              value={this.props.formData.lastName}
            />
          </div>

          <div className='form-group'>
            <label>Email</label>
            <input
              onChange={this.props.onChange}
              className='form-control'
              type='email'
              name='email'
              value={this.props.formData.email}
            />
          </div>

          <div className='form-group'>
            <label>Job Title</label>
            <input
              onChange={this.props.onChange}
              className='form-control'
              type='text'
              name='jobTitle'
              value={this.props.formData.jobTitle}
            />
          </div>

          <div className='form-group'>
            <label>Twitter</label>
            <input
              onChange={this.props.onChange}
              className='form-control'
              type='text'
              name='twitter'
              value={this.props.formData.twitter}
            />
          </div>

          <button onClick={this.handleClick} className='btn btn-primary'>
            Save
          </button>
        </form>
      </>
    );
  }
}

export default BadgeForm;
