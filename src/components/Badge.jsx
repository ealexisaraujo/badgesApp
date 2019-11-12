import React from 'react';
import Logo from '../assets/images/badge-header.svg';
import '../assets/styles/Badge.scss';

class Badge extends React.Component {
  render() {
    return (
      <div className='Badge'>
        <div className='Badge__header'>
          <Logo alt='Logo de la conferencia' />
        </div>

        <div className='Badge__section-name'>
          <img
            className='Badge__avatar'
            src='https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon'
            alt='Avatar'
          />
          <h1>
            Richard
            <br />
            Kaufman
          </h1>
        </div>

        <div className='Badge__section-info'>
          <h3>Frontend Engineer</h3>
          <div>@sparragus</div>
        </div>

        <div className='Badge__footer'>#platziconf</div>
      </div>
    );
  }
}

export default Badge;
