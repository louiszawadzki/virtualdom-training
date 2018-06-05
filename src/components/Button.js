import React from 'react';
import { connect } from 'react-redux'

const Button = props => (
  <button onClick={props.increment}>
    add 1
  </button>
)

export default connect(
  () => ({}),
  dispatch => ({
    increment: () => dispatch({
      type: 'INCREMENT',
    }),
  }),
)(Button);
