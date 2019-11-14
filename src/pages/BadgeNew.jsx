import React from 'react';
import stars from '../assets/images/stars.svg';
import styled from 'styled-components';
import '../assets/styles/BadgeNew.scss';
import HeaderBadge from '../assets/images/badge-header.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import Navbar from '../components/Navbar';

const Content = styled.div`
  width: 100%;
  padding: 2rem 0;
  background-image: url(${stars});
  background-repeat: repeat;
  margin-bottom: 1rem;
  color: #ffffff;
`;

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Content className='BadgeNew__hero'>
          <img src={HeaderBadge} className='img-fluid' alt='Logo' />
        </Content>

        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <Badge
                firstName='Richard'
                lastName='Kaufman'
                twitter='sparragus'
                jobTitle='Frontend Engineer'
                avatarUrl='https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon'
              />
            </div>
            <div className='col-6'>
              <BadgeForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
