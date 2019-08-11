import React from 'react'
import {css} from '@emotion/core'

const containerStyle = css`
  border: 1px solid whitesmoke;
  border-radius: 5px;
  padding: 20px;
`

const labelStyle = css`
  display: block;
  color: whitesmoke;
  margin-bottom: 5px;
`

const inputStyle = css`
  border-radius: 5px;
  background-color: whitesmoke;
  padding: 5px;
`

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
    <div css={containerStyle}>
      <h2 css={{color: 'whitesmoke', marginTop: 0}}>Login</h2>
      <form onSubmit={handleSubmit}>
        <div css={{marginBottom: 10}}>
          <label css={labelStyle}>E-mail/Username</label>
          <input css={inputStyle} />
        </div>
        <div css={{marginBottom: 20}}>
          <label css={labelStyle}>Password</label>
          <input css={inputStyle} type='password' />
        </div>
        <div css={{textAlign: 'center', marginBottom: 20}}>
          <button type='submit' css={buttonStyle}>
            Login
          </button>
        </div>
      </form>
      <div css={{textAlign: 'center', color: 'whitesmoke'}}>
        <a css={linkStyle}>Sign Up!</a>
      </div>
    </div>
  )
}

export default Login
