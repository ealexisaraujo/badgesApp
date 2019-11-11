import React from 'react';
import Logo from '../assets/images/badge-header.svg';
import '../assets/styles/Badeg.scss';

class Badge extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Logo alt='Logo de la conferencia' />
        </div>

        <div>
          <img src='https://www.gravatar.com/avatar?d=identicon' alt='Avatar' />
          <h1>
            Richard
            <br />
            Kaufman
          </h1>
        </div>

        <div>
          <p>Frontend Engineer</p>
          <p>@sparragus</p>
        </div>

        <div>#platziconf</div>
      </div>
    );
  }
}

export default Badge;
