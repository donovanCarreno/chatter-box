import React from 'react'
import PropTypes from 'prop-types'
import {css} from '@emotion/core'

const containerStyle = css`
  border: 1px solid whitesmoke;
  border-radius: 5px;
  padding: 20px;
`

function FormContainer({header, children}) {
  return (
    <div css={containerStyle}>
      <h2 css={{color: 'whitesmoke', marginTop: 0}}>{header}</h2>
      {children}
    </div>
  )
}

FormContainer.propTypes = {
  header: PropTypes.string,
  children: PropTypes.node
}

export default FormContainer
