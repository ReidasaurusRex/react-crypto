import React, { Component } from 'react';
import Button from '../../../Button/Button';

class CipherSelect extends Component {
  constructor() {
    super();
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }
  handleButtonClick(param) {
    alert(param);
  }
  render() {
    var self = this;
    return (
      <div>
        <Button handleClick={self.handleButtonClick}>Caesar</Button>
        <Button handleClick={self.handleButtonClick}>Vigenere</Button>
      </div>
    );
  }
}

export default CipherSelect;