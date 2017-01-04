import React, { Component } from 'react';
import Header from './Header/Header';
import Encrypt from './Encrypt/Encrypt';

class App extends Component {
  render() {
    return (
      <div>
        
        <Header title="Cipher" />

        <Encrypt />

      </div>
    );
  }
}

export default App;
