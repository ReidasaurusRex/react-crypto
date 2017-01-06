import React, { Component } from 'react';
import Header from './Header/Header';
import Encrypt from './Encrypt/Encrypt';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCipher: 'caesar'
    };
    this.handleCipherChange = this.handleCipherChange.bind(this);
  }
  handleCipherChange(cipher) {
    this.setState({currentCipher: cipher});
  }
  componentDidMount() {
    console.log("APP");
    console.log(this.state);
  }
  render() {
    var self = this;
    return (
      <div>
        
        <Header title="Cipher" handleCipherChange={self.handleCipherChange} currentCipher={self.state.currentCipher}/>

        <Encrypt />

      </div>
    );
  }
}

export default App;
