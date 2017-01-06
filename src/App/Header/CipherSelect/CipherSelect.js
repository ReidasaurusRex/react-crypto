import React, { Component } from 'react';
import Button from '../../../Button/Button';

const ciphers = ['caesar', 'vigenere'];

class CipherSelect extends Component {
  constructor() {
    super();
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.cipherSelected = this.cipherSelected.bind(this);
    this.state = {
      caesar: true,
      vigenere: false
    }
  }
  handleButtonClick(param) {
    alert(param);
  }
  cipherSelected(cipher) {
    return this.state[cipher] ? 'selected' : 'unselected';
  }
  render() {
    var self = this;
    var selectors = ciphers.map(function(cipher, index) {
      return (<Button key={index} handleClick={self.handleButtonClick} status={self.cipherSelected(cipher)}>{cipher}</Button>);
    })
    return (
      <div>
        {selectors}
      </div>
    );
  }
}

export default CipherSelect;