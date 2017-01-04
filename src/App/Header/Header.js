import React, { Component } from 'react';
import CryptSelect from './CryptSelect/CryptSelect';
import CipherSelect from './CipherSelect/CipherSelect';

class Header extends Component {
  render() {
    return (
      <header>
        
        <h2>{this.props.title}</h2>

        <nav>
          <CryptSelect />
          <CipherSelect />
        </nav>

      </header>
    );
  }
}

export default Header;