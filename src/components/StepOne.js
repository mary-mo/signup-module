import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from './Button';
import TextField from './TextField';
import { nextStep, updateUser } from '../actions';

class StepOne extends Component {
  state = {
    emailError: null,
    passwordError: null,
    confirmError: null,
    email: this.props.user.email,
    password: '',
    passwordConfirm: '',
  };

  handleTextChange = e => {
    const value = e.target.value;
    const name = e.target.name;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { email, password, passwordConfirm } = this.state;

    const emailValid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
    const passwordLength = password.length >= 6;
    const passwordsMatch = password === passwordConfirm;

    this.setState({
      emailError: emailValid ? null : 'Invalid email address!',
      passwordError: passwordLength ? null : 'Password should be minimum 6 characters long!',
      confirmError: passwordsMatch ? null : 'Password does not match the confirm password!',
    });

    if (emailValid && passwordLength && passwordsMatch) {
      this.props.nextStep();
      this.props.updateUser({ email, password });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} noValidate>
        <div className="main">
          <TextField
            type="email"
            label="Email"
            name="email"
            error={this.state.emailError}
            value={this.state.email}
            onChange={this.handleTextChange}
          />
          <TextField
            type="password"
            label="Password"
            name="password"
            error={this.state.passwordError}
            value={this.state.password}
            onChange={this.handleTextChange}
          />
          <TextField
            type="password"
            label="Confirm Password"
            name="passwordConfirm"
            error={this.state.confirmError}
            value={this.state.passwordConfirm}
            onChange={this.handleTextChange}
          />
        </div>
        <div className="footer">
          <Button type="submit" label="Next" icon="arrow-right" />
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    nextStep: () => {
      dispatch(nextStep());
    },
    updateUser: user => {
      dispatch(updateUser(user));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StepOne);
