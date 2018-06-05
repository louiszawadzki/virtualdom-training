import React from 'react';
import { connect } from 'react-redux'

const FirstComponent = () => (
  <div>
    <ConnectedComponent />
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
)(Display)

export default FirstComponent;
