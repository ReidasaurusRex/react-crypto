import React, { Component } from 'react';
import Header from './Header/Header';
import Encrypt from './Encrypt/Encrypt';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCipher: 'caesar',
      currentCrypt: 'encrypt'
    };
    this.handleCipherChange = this.handleCipherChange.bind(this);
    this.handleCryptChange = this.handleCryptChange.bind(this);
  }
  handleCipherChange(cipher) {
    this.setState({currentCipher: cipher});
  }
  handleCryptChange(crypt) {
    this.setState({currentCrypt: crypt})
  }
  render() {
    var self = this;
    return (
      <div>
        
        <Header 
          title="Cipher" 
          handleCipherChange={self.handleCipherChange} 
          handleCryptChange={self.handleCryptChange}
          currentCipher={self.state.currentCipher} 
          currentCrypt={self.state.currentCrypt}
        />

        <Encrypt 
          currentCrypt={self.state.currentCrypt}
          currentCipher={self.state.currentCipher}
        />

      </div>
    );
  }
}

export default App;
