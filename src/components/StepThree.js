import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from './Button';

class StepThree extends Component {

  handleClick = () =>{
    console.log(JSON.stringify(this.props.user, null, 2));
  }

  render() {
    return (
      <div>
        <div className="main third-page">
          <i className="fa fa-check-circle" />
          <Button label="Go to Dashboard" icon="arrow-right" border onClick={this.handleClick}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(StepThree);
