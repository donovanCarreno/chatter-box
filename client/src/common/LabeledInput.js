import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {css} from '@emotion/core'

const labelStyle = css`
  display: block;
  color: whitesmoke;
  margin-bottom: 5px;
`

const inputStyle = css`
  border: none;
  border-radius: 5px;
  background-color: whitesmoke;
  padding: 5px;
`

function LabeledInput({label, type, name, value, onChange}) {
  return (
    <Fragment>
      <label css={labelStyle}>{label}</label>
      <input css={inputStyle} type={type} name={name} value={value} onChange={onChange} />
    </Fragment>
  )
}

LabeledInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

LabeledInput.defaultProps = {
  type: 'text'
}

export default LabeledInput
