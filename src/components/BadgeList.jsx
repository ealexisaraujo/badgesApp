import React from 'react';
import BadgesListItem from './BadgeListItem';

import '../assets/styles/BadgesList.scss';

class BadgesList extends React.Component {
  render() {
    return (
      <div className='BadgesList'>
        <ul className='list-unstyled'>
          {this.props.badges.map(badge => {
            return (
              <li key={badge.id}>
                <BadgesListItem badge={badge} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default BadgesList;
