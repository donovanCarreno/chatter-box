import React from 'react'
import {Link} from 'react-router-dom'
import {css} from '@emotion/core'

import FormContainer from '../../common/FormContainer'
import LabeledInput from '../../common/LabeledInput'
import SubmitButton from '../../common/SubmitButton'

import useForm from '../../hooks/useForm'

import {login} from '../../api'

const linkStyle = css`
  color: whitesmoke;
  cursor: pointer;
  :hover {
    color: #02f63a;
    font-weight: bold;
  }
`

function Login() {
  const {values, setValue} = useForm()
  function handleSubmit(e) {
    e.preventDefault()
    login(values).then(res => console.log({res}))
  }

  function handleChange(e) {
    setValue(e.target.name, e.target.value)
  }

  return (
    <FormContainer header='Login'>
      <form onSubmit={handleSubmit}>
        <div css={{marginBottom: 20}}>
          <LabeledInput label='Email/Username' name='username' value={values.username || ''} onChange={handleChange} />
        </div>
        <div css={{marginBottom: 20}}>
          <LabeledInput
            label='Password'
            type='password'
            name='password'
            value={values.password || ''}
            onChange={handleChange}
          />
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
