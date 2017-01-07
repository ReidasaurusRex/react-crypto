import React, { Component } from 'react';

class Encrypt extends Component {
  render() {
    return (
      <div className='c-encrypt'>
        <p>You are currently {this.props.currentCrypt}ing with the {this.props.currentCipher} cipher.</p>
      </div>
    );
  }
}

export default Encrypt;