import React, { Component } from 'react';

class Encrypt extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    var capCrypt = this.props.currentCrypt[0].toUpperCase() + this.props.currentCrypt.slice(1);
    var capCipher = this.props.currentCipher[0].toUpperCase() + this.props.currentCipher.slice(1);
    return (
      <div className='c-encrypt'>
        <h3 className='c-encrypt__crypt'>{capCrypt}ing</h3>
        <h3 className='c-encrypt__cipher'>{capCipher}</h3>
      </div>
    );
  }
}

export default Encrypt;