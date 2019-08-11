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

function Login() {
  function handleSubmit(e) {
    e.preventDefault()
  }
  return (
    <FormContainer header='Login'>
      <form onSubmit={handleSubmit}>
        <div css={{marginBottom: 20}}>
          <LabeledInput label='Email/Username' name='username' value='' onChange={() => {}} />
        </div>
        <div css={{marginBottom: 20}}>
          <LabeledInput label='Password' type='password' name='password' value='' onChange={() => {}} />
        </div>
        <div css={{textAlign: 'center', marginBottom: 20}}>
          <SubmitButton>Login</SubmitButton>
        </div>
      </form>
      <div css={{textAlign: 'center', color: 'whitesmoke'}}>
        <Link css={linkStyle} to='/signup'>
          Sign Up!
        </Link>
      </div>
    </FormContainer>
  )
}

export default Login