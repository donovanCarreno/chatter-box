import React from 'react'
import {css} from '@emotion/core'

import SideBar from './SideBar'
import Messages from './Messages'
import MessageInput from './MessageInput'

const messageInputStyle = css`
  height: 15vh;
  display: flex;
  justify-content: center;
  padding: 10px 0;
`

function MainView() {
  return (
    <div style={{display: 'flex', height: '100vh'}}>
      <div style={{flex: 1}}>
        <SideBar />
      </div>
      <div style={{flex: 4}}>
        <div style={{height: '85vh'}}>
          <Messages />
        </div>
        <div css={messageInputStyle}>
          <MessageInput />
        </div>
      </div>
    </div>
  )
}

export default MainView
