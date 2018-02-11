import React, { Component } from 'react';

class DateField extends Component{
  render () {
    return (
      <label>
        Date of birth
        <div className="datefield-container">
          <input className="datefield dd" placeholder="DD" />
          <input className="datefield mm" placeholder="MM" />
          <input className="datefield yyyy" placeholder="YYYY" />
          {this.props.error && (
          <p className="error-message">
            <i className="fa fa-exclamation-circle" /> {this.props.error}
          </p>
        )}
        </div>
      </label>
    )
  }
}

export default DateField;
