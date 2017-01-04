import React from 'react';
import ReactDOM from 'react-dom';
import Encrypt from './Encrypt';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Encrypt />, div);
});