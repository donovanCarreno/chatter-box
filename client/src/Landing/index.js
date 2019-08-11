import React from 'react'
import {Route} from 'react-router-dom'
import {css} from '@emotion/core'

import Login from './Login'
import SignUp from './SignUp'

import Restaurant from '../../assets/restaurant.jpg'

const backgroundStyle = css`
  background-color: rgba(0, 0, 0, 0.7);
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${Restaurant});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
`

const containerStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`

function Landing() {
  return (
    <div css={backgroundStyle}>
      <div css={containerStyle}>
        <Route exact path='/' component={Login} />
        <Route path='/signup' component={SignUp} />
      </div>
    </div>
  )
}

export default Landing
