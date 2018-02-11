import React, { Component } from 'react';

class Dropdown extends Component {
  render() {
    return (
      <label className="dropdown-container">
        Where did you hear about us?
        <select className="dropdown" {...this.props}>
          {this.props.options.map(option => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
    );
  }
}

export default Dropdown;
