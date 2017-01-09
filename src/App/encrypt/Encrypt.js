import React, { Component } from 'react';
import CryptHandler from '../../CryptHandler';

class Encrypt extends Component {
  constructor(props) {
    super(props);
    this.handleInputMessageChange = this.handleInputMessageChange.bind(this);
    this.handleKeyChange = this.handleKeyChange.bind(this);
    this.state = {
      inputMessage: '',
      key: '', 
      returnedMessage: ''
    }
  }
  componentDidMount() {
    console.log(this.props);
  }
  handleInputMessageChange(e) {
    e.preventDefault();
    this.setState({inputMessage: e.target.value})
  }
  handleKeyChange(e) {
    e.preventDefault();
    this.setState({key: this.target.value})
  }
  handleCryptPress(e){
    e.preventDefault();
    if (this.state.inputMessage && this.state.key) {
      cryptedMessage = CryptHandler.handleCrypt(this.state.inputMessage, this.state.key, this.props.currentCrypt, this.props.currentCipher);
      this.setState({returnedMessage: cryptedMessage});
    }
  }
  render() {
    var self = this;
    var capCrypt = this.props.currentCrypt[0].toUpperCase() + this.props.currentCrypt.slice(1);
    var capCipher = this.props.currentCipher[0].toUpperCase() + this.props.currentCipher.slice(1);
    return (
      <div className='c-encrypt'>
        <h3 className='c-encrypt__crypt'>{capCrypt}ing with {capCipher}</h3>
        <input 
          type=''
          placeholder={'Message to ' + self.props.currentCrypt + '...'}
          value={this.state.inputMessage}
          onChange={this.handleInputMessageChange}
        />
        <input 
          type='text'
          placeholder={this.props.currentCipher === 'caesar' ? 'Key number...' : 'Key phrase...'}
          value={this.state.key}
          onChange={this.handleKeyChange}
        />
        <h5 className='c-encrypt__crypted-message'>{this.state.returnedMessage ? this.state.returnedMessage : 'Enter message above'}</h5>
      </div>
    );
  }
}

export default Encrypt;