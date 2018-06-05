import React from 'react';
import { connect } from 'react-redux'

const FirstComponent = props => (
  <div>
    <Display {...props} />
    <OtherComponent />
    <OtherComponent />
    <OtherComponent />
  </div>
)

const OtherComponent = () => (
  <div>I should not render {Math.random()}</div>
)

const Display = props => (
  <div>{props.counter}</div>
)

const ConnectedComponent = connect(
  state => ({
    counter: state,
  }),
)(FirstComponent)

export default ConnectedComponent;
