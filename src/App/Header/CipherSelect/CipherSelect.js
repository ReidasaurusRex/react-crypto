import React, { Component } from 'react';
import Button from '../../../Button/Button';
import '../Selectors.css'

const ciphers = ['caesar', 'vigenere'];

class CipherSelect extends Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.cipherSelected = this.cipherSelected.bind(this);
  }
  handleButtonClick(cipher) {
    this.props.handleCipherChange(cipher);
  }
  cipherSelected(cipher) {
    return this.props.currentCipher === cipher ? 'selected' : 'unselected';
  }
  render() {
    var self = this;
    var selectors = ciphers.map(function(cipher, index) {
      return (<Button key={index} handleClick={self.handleButtonClick} status={self.cipherSelected(cipher)}>{cipher}</Button>);
    });
    return (
      <div className='c-selectors'>
        {selectors}
      </div>
    );
  }
}

export default CipherSelect;