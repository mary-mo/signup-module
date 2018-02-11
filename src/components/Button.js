import React, { Component } from 'react';

class Button extends Component {

  render() {
    return (
      <button
        type={this.props.type}
        className={`btn ${this.props.back ? 'btn-back' : ''} ${
          this.props.border ? 'btn-border' : ''
        }`}
        onClick={this.props.onClick}
      >
        {this.props.label} {this.props.icon && <i className={`fa fa-${this.props.icon}`} />}
      </button>
    );
  }
}

export default Button;
