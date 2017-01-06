import React, { Component } from 'react';
import CryptSelect from './CryptSelect/CryptSelect';
import CipherSelect from './CipherSelect/CipherSelect';

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleCipherChange = this.handleCipherChange.bind(this);
    this.handleCryptChange = this.handleCryptChange.bind(this);
  }
  handleCryptChange(crypt) {
    this.props.handleCryptChange(crypt);
  }
  handleCipherChange(cipher) {
    this.props.handleCipherChange(cipher);
  }
  render() {
    var self = this;
    return (
      <header>
        
        <h2>{this.props.title}</h2>

        <nav>
          <CryptSelect handleCryptChange={self.handleCryptChange} currentCrypt={self.props.currentCrypt} />
          <CipherSelect handleCipherChange={self.handleCipherChange} currentCipher={self.props.currentCipher} />
        </nav>

      </header>
    );
  }
}

export default Header;