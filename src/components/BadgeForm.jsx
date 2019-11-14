import React from 'react';

const BadgeForm = () => {
  const handleChange = event => {
    console.log({
      name: event.target.name,
      value: event.target.value,
    });
  };

  const handleClick = event => {
    console.log('Button was clicked');
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log('Form was submitted');
  };

  return (
    <div>
      <h1>New Attendant</h1>

      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>First Name</label>
          <input
            onChange={handleChange}
            className='form-control'
            type='text'
            name='firstName'
          />
        </div>

        <button onClick={handleClick} className='btn btn-primary'>
          Save
        </button>
      </form>
    </div>
  );
};

export default BadgeForm;
