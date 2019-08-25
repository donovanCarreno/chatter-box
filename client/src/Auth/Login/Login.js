import React from 'react'
import {Link} from 'react-router-dom'
import {css} from '@emotion/core'
import get from 'lodash.get'

import Alert from 'react-bootstrap/Alert'
import FormContainer from '../../common/FormContainer'
import LabeledInput from '../../common/LabeledInput'
import SubmitButton from '../../common/SubmitButton'

import useForm from '../../hooks/useForm'
import {useAuth} from '../../context/auth-context'

import {login} from '../../api'

import 'bootstrap/dist/css/bootstrap.min.css'

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
  const {saveToken} = useAuth()
  const [error, setError] = React.useState()

  function handleSubmit(e) {
    e.preventDefault()
    login(values)
      .then(res => {
        saveToken(res.data.token)
      })
      .catch(e => {
        const errorMessage = get(e, 'response.data.message', 'Error')
        setError(errorMessage)
      })
  }

  function handleChange(e) {
    if (error) {
      setError()
    }
    setValue(e.target.name, e.target.value)
  }

  return (
    <FormContainer header='Login'>
      <form onSubmit={handleSubmit}>
        {error && <Alert variant='danger'>{error}</Alert>}
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
