import React from 'react';
import styled from 'styled-components';
import stars from '../assets/images/stars.svg';
import '../assets/styles/BadgeNew.scss';
import HeaderBadge from '../assets/images/badge-header.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

const Content = styled.div`
  width: 100%;
  padding: 2rem 0;
  background-image: url(${stars});
  background-repeat: repeat;
  margin-bottom: 1rem;
  color: #ffffff;
`;

class BadgeNew extends React.Component {
  state = {
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '',
    },
  };

  handleChange = event => {
    this.setState({
      form: {
        ...this.state.form,
        [event.currentTarget.name]: event.currentTarget.value,
      },
    });
  };

  render() {
    return (
      <>
        <Content className='BadgeNew__hero'>
          <img src={HeaderBadge} className='img-fluid' alt='Logo' />
        </Content>

        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <Badge
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                email={this.state.form.email}
                twitter={this.state.form.twitter}
                jobTitle={this.state.form.jobTitle}
                avatarUrl='https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon'
              />
            </div>
            <div className='col-6'>
              <BadgeForm
                onChange={this.handleChange}
                formData={this.state.form}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default BadgeNew;
