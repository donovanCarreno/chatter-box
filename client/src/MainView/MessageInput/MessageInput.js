import React from 'react'
import {css} from '@emotion/core'

const formStyle = css`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 2px;
  width: 95%;
`

const inputStyle = css`
  border: none;
  resize: none;
  width: 100%;
`

function MessageInput() {
  const [message, setMessage] = React.useState('')

  function submitMessage(e) {
    e.preventDefault()
  }
  function handleChange(e) {
    setMessage(e.target.value)
  }

  return (
    <form css={formStyle} onSubmit={submitMessage}>
      <textarea css={inputStyle} value={message} onChange={handleChange} placeholder='Enter message...' />
    </form>
  )
}

export default MessageInput
