import React from 'react';
import ReactDOM from 'react-dom';
import CryptSelect from './CryptSelect';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CryptSelect />, div);
});