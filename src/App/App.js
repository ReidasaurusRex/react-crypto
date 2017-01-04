import React, { Component } from 'react';
import CryptSelect from './CryptSelect/CryptSelect';
import CipherSelect from './CipherSelect/CipherSelect';
import Encrypt from './Encrypt/Encrypt';

class App extends Component {
  render() {
    return (
      <div>
        
        <header className='c-header'>
        
          <h2 className='c-header__title'>Cipher</h2>
          
          <nav className='c-header__selectors'>
            <CryptSelect />
            <CipherSelect />
          </nav>

        </header>

        <Encrypt />

      </div>
    );
  }
}

export default App;
