import React from 'react';
import ReactDOM from 'react-dom';
import CipherSelect from './CipherSelect';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CipherSelect />, div);
});