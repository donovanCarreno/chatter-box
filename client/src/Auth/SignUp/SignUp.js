import React from 'react'
import {Link} from 'react-router-dom'
import {css} from '@emotion/core'

import FormContainer from '../../common/FormContainer'
import LabeledInput from '../../common/LabeledInput'
import SubmitButton from '../../common/SubmitButton'

const linkStyle = css`
  color: whitesmoke;
  cursor: pointer;
  :hover {
    color: #02f63a;
    font-weight: bold;
  }
`

function SignUp() {
  function handleSubmit(e) {
    e.preventDefault()
  }
  return (
    <FormContainer header='Sign Up'>
      <form onSubmit={handleSubmit}>
        <div css={{marginBottom: 20}}>
          <LabeledInput label='Username' name='username' value='' onChange={() => {}} />
        </div>
        <div css={{marginBottom: 20}}>
          <LabeledInput label='Email' name='email' value='' onChange={() => {}} />
        </div>
        <div css={{marginBottom: 20}}>
          <LabeledInput label='Password' type='password' name='password' value='' onChange={() => {}} />
        </div>
        <div css={{textAlign: 'center', marginBottom: 20}}>
          <SubmitButton>Sign Up</SubmitButton>
        </div>
      </form>
      <div css={{textAlign: 'center', color: 'whitesmoke'}}>
        <Link css={linkStyle} to='/'>
          Login
        </Link>
      </div>
    </FormContainer>
  )
}

export default SignUp
