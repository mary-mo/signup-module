import React, { Component } from 'react';

class TextField extends Component {
  render() {
    return (
      <label>
        {this.props.label}
        <input className="textfield" {...this.props} />
        {this.props.error && (
          <p className="error-message">
            <i className="fa fa-exclamation-circle" /> {this.props.error}
          </p>
        )}
      </label>
    );
  }
}

export default TextField;
