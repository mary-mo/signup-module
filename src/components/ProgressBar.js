import React, { Component } from 'react';

class ProgressBar extends Component{
  render () {
    return (
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${this.props.progress}%` }}></div>
      </div>
    )
  }
}

export default ProgressBar;
