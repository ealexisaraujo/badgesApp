import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import '../assets/styles/Home.scss';
import stars from '../assets/images/stars.svg';
import platziconfLogoImage from '../assets/images/platziconf-logo.svg';
import astronautsImage from '../assets/images/astronauts.svg';

const Content = styled.div`
  width: 100%;
  min-height: calc(100vh - 60px);
  background-image: url(${stars});
  background-repeat: repeat;

  color: #ffffff;
  display: flex;
  align-items: center;
`;

class Home extends React.Component {
  render() {
    return (
      <Content className='Home'>
        <div className='container'>
          <div className='row'>
            <div className='Home__col col-12 col-md-4'>
              <img
                src={platziconfLogoImage}
                alt='Platzi Conf Logo'
                className='img-fluid mb-2'
              />

              <h1>Badge Management System</h1>
              <Link className='btn btn-primary' to='/badges'>
                Start
              </Link>
            </div>

            <div className='Home__col d-none d-md-block col-md-8'>
              <img
                src={astronautsImage}
                alt='Astronauts'
                className='img-fluid p-4'
              />
            </div>
          </div>
        </div>
      </Content>
    );
  }
}

export default Home;
