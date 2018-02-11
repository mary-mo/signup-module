import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from './Button';
import DateField from './DateField';
import GenderSelect from './GenderSelect';
import Dropdown from './Dropdown';
import { nextStep, updateUser, previousStep } from '../actions';

class StepTwo extends Component {
  state = {
    dataError: null,
    gender: 'male',
    from: '',
    birthday: null,
  };

  handleGenderChange = gender => {
    this.setState({ gender });
  };

  handleFromChange = e => {
    this.setState({
      from: e.target.value,
    });
  };

  handleDateChange = d => {
    this.setState({
      birthday: d,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { gender, from, birthday } = this.state;

    this.setState({
      dataError: birthday ? null : 'Invalid date',
    });

    if (birthday) {
      this.props.nextStep();
      this.props.updateUser({ birthday: +birthday, gender, from });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="main second-page">
          <DateField
            error={this.state.dataError}
            date={this.state.birthday}
            onChange={this.handleDateChange}
          />
          <GenderSelect onChange={this.handleGenderChange} selected={this.state.gender} />
          <Dropdown
            options={[
              { label: '', value: '' },
              { label: 'Option 1', value: 'Option 1' },
              { label: 'Option 2', value: 'Option 2' },
              { label: 'Option 3', value: 'Option 3' },
              { label: 'Option 4', value: 'Option 4' },
              { label: 'Option 5', value: 'Option 5' },
              { label: 'Option 6', value: 'Option 6' },
              { label: 'Option 7', value: 'Option 7' },
            ]}
            onChange={this.handleFromChange}
          />
        </div>
        <div className="footer">
          <Button label="Next" icon="arrow-right" type="submit" />
          <Button label="Back" back type="button" onClick={this.props.previousStep} />
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    nextStep: () => {
      dispatch(nextStep());
    },
    previousStep: () => {
      dispatch(previousStep());
    },
    updateUser: user => {
      dispatch(updateUser(user));
    },
  };
};

export default connect(null, mapDispatchToProps)(StepTwo);
