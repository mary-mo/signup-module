import React, { Component } from 'react';

class DateField extends Component {
  state = {
    dd: '',
    mm: '',
    yyyy: '',
  };

  handleInputChange = e => {
    const value = e.target.value;
    const name = e.target.name;

    this.setState({ [name]: value }, this.handleDateChange);
  };

  handleDateChange = () => {
    const dd = +this.state.dd;
    const mm = +this.state.mm;
    const yyyy = +this.state.yyyy;

    const date = new Date(yyyy, mm - 1, dd);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const dateValid = day === dd && month === mm && year === yyyy && yyyy >= 1900;

    this.props.onChange(dateValid ? date : null);
  };

  render() {
    return (
      <label>
        Date of birth
        <div className="datefield-container">
          <input
            className="datefield dd"
            placeholder="DD"
            onChange={this.handleInputChange}
            value={this.state.dd}
            name="dd"
          />
          <input
            className="datefield mm"
            placeholder="MM"
            onChange={this.handleInputChange}
            value={this.state.mm}
            name="mm"
          />
          <input
            className="datefield yyyy"
            placeholder="YYYY"
            onChange={this.handleInputChange}
            value={this.state.yyyy}
            name="yyyy"
          />
          {this.props.error && (
            <p className="error-message">
              <i className="fa fa-exclamation-circle" /> {this.props.error}
            </p>
          )}
        </div>
      </label>
    );
  }
}

export default DateField;
