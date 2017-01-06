import React, { Component } from 'react';
import Button from '../../../Button/Button';

const crypts = ['encrypt', 'decrypt'];

class CryptSelect extends Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.cryptSelected = this.cryptSelected.bind(this);
  }
  handleButtonClick(crypt) {
    this.props.handleCryptChange(crypt);
  }
  cryptSelected(crypt) {
    return this.props.currentCrypt === crypt ? 'selected' : 'unselected';
  }
  render() {
    var self = this;
    var selectors = crypts.map(function(crypt, index) {
      return(<Button key={index} handleClick={self.handleButtonClick} status={self.cryptSelected(crypt)}>{crypt}</Button>);
    });
    return (
      <div>
        {selectors}
      </div>
    );
  }
}

export default CryptSelect;