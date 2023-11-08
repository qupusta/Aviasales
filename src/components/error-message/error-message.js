import React from 'react'

import classes from './error-message.module.scss'

const ErrorMessage = () => (
  <div className={classes.error}>
    <span>Failed to load. </span>
    <span>Try again.</span>
  </div>
)

export default ErrorMessage
