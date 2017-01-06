import React, { Component } from 'react';
import Button from '../../../Button/Button';

const ciphers = ['caesar', 'vigenere'];

class CipherSelect extends Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.cipherSelected = this.cipherSelected.bind(this);
  }
  handleButtonClick(param) {
    this.props.handleCipherChange(param);
  }
  cipherSelected(cipher) {
    return this.props.currentCipher === cipher ? 'selected' : 'unselected';
  }
  componentDidMount() {
    console.log("CIPHER SELECT");
    console.log(this.props);
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