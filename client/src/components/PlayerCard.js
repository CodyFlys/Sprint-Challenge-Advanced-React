import React from 'react';

class PlayerCard extends React.Component {
    constructor() {
      super();
      this.state = {
      };
  }

  render(props) {
    return (
            <div className="PlayerCard">
                <h1 data-testid ='name'>{this.props.name}</h1>
                <h1 data-testid ='country'>{this.props.country}</h1>
                <h1 data-testid ='searches'>{this.props.searches}</h1>
            </div>
    )
  }
}

export default PlayerCard;