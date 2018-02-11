import React, { Component } from 'react';
import { connect } from 'react-redux';

import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import ProgressBar from './ProgressBar';

class App extends Component {
  render() {
    const steps = [
      { component: StepOne, progress: 30, title: 'Signup' },
      { component: StepTwo, progress: 70, title: 'Signup' },
      { component: StepThree, progress: 100, title: 'Thank you!' },
    ];
    const step = steps[this.props.step];

    return (
      <div className="app">
        <div className="step-field">
          <div className="header">
            <p>{step.title}</p>
          </div>
          <ProgressBar progress={step.progress} />
          <step.component />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    step: state.step,
  };
};

export default connect(mapStateToProps)(App);
