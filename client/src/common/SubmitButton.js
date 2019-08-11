import React from 'react'
import PropTypes from 'prop-types'
import {css} from '@emotion/core'

const buttonStyle = css`
  background-color: #0176dd;
  border: none;
  border-radius: 5px;
  color: whitesmoke;
  cursor: pointer;
  padding: 5px;
  width: 100%;
  :hover {
    background-color: #036cca;
    font-weight: bold;
  }
`

function SubmitButton({children}) {
  return (
    <button type='submit' css={buttonStyle}>
      {children || 'Submit'}
    </button>
  )
}

SubmitButton.propTypes = {
  children: PropTypes.string
}

export default SubmitButton
