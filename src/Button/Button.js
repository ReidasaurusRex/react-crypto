import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.handleClick(this.props.children.toLowerCase());
  }
  render() {
    return (
      <button className={this.props.status} onClick={this.handleClick}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;