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
  }

  handleGenderChange = (gender) =>{
    this.setState({ gender })
  }

  handleFromChange = (e) => {
    this.setState({
      from: e.target.value,
    })
  }

  handleSubmit = e => {
    e.preventDefault();

    const { gender, from } = this.state;

    const elements = e.target.elements;
    const dd = +elements[0].value;
    const mm = +elements[1].value;
    const yyyy = +elements[2].value;

    const ddValid = dd >= 1 && dd <=31;
    const mmValid = mm >= 1 && mm<=12;
    const yyyyValid = !isNaN(yyyy) && yyyy > 1899 && yyyy < 10000;

    const date = new Date(yyyy, mm-1, dd);
    const day = date.getDate();
    const month = date.getMonth()+1;
    const year = date.getFullYear();

    const dateValid = day === dd && month === mm && year === yyyy;

    this.setState({
      dataError: (ddValid && mmValid && yyyyValid && dateValid) ? null : 'Invalid date',
    })

    if (ddValid && mmValid && yyyyValid && dateValid) {
      this.props.nextStep();
      this.props.updateUser({birthday: +date, gender, from});
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="main second-page">
          <DateField error={this.state.dataError}/>
          <GenderSelect onChange={this.handleGenderChange} selected={this.state.gender}/>
          <Dropdown
            options={[
              {label: '', value: '' },
              {label: 'Option 1', value: 'Option 1' },
              {label: 'Option 2', value: 'Option 2' },
              {label: 'Option 3', value: 'Option 3' },
              {label: 'Option 4', value: 'Option 4' },
              {label: 'Option 5', value: 'Option 5' },
              {label: 'Option 6', value: 'Option 6' },
              {label: 'Option 7', value: 'Option 7' },
            ]}
            onChange = {this.handleFromChange}
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


