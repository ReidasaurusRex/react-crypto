import React, { Component } from 'react';
import CryptSelect from './CryptSelect/CryptSelect';
import CipherSelect from './CipherSelect/CipherSelect';

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleCipherChange = this.handleCipherChange.bind(this);
  }
  handleCipherChange(cipher) {
    this.props.handleCipherChange(cipher);
  }
  componentDidMount() {
    console.log("HEADER")
    console.log(this.props);
  }
  render() {
    var self = this;
    return (
      <header>
        
        <h2>{this.props.title}</h2>

        <nav>
          <CryptSelect />
          <CipherSelect handleCipherChange={self.handleCipherChange} currentCipher={self.props.currentCipher}/>
        </nav>

      </header>
    );
  }
}

export default Header;