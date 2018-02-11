import React, { Component } from 'react';

class GenderSelect extends Component {
  handleGenderClick = e => {
    this.props.onChange(e.target.name);
  };

  render() {
    return (
      <label className="g-btn-container">
        Gender
        <div>
          <button
            type="button"
            className={`genderbtn g-male ${this.props.selected === 'male' ? 'g-selected' : ''}`}
            name="male"
            onClick={this.handleGenderClick}
          >
            Male
          </button>
          <button
            type="button"
            className={`genderbtn g-female ${this.props.selected === 'female' ? 'g-selected' : ''}`}
            name="female"
            onClick={this.handleGenderClick}
          >
            Female
          </button>
          <button
            type="button"
            className={`genderbtn g-unspecified ${
              this.props.selected === 'unspecified' ? 'g-selected' : ''
            }`}
            name="unspecified"
            onClick={this.handleGenderClick}
          >
            Unspecified
          </button>
        </div>
      </label>
    );
  }
}

export default GenderSelect;
