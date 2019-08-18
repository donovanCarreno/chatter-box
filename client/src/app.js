import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'
import {Global, css} from '@emotion/core'
import {AuthProvider, useAuth} from './context/auth-context'
import Auth from './Auth'

import 'normalize.css'

function PlaceHolder() {
  const {deleteToken} = useAuth()
  return (
    <div>
      <button onClick={deleteToken}>Logout</button>
    </div>
  )
}

function App() {
  const {getToken: haveToken} = useAuth()
  return (
    <Fragment>
      <Global
        styles={css`
          * {
            font-family: Verdana, Geneva, Tahoma, sans-serif;
          }
        `}
      />
      {haveToken() ? <PlaceHolder /> : <Auth />}
    </Fragment>
  )
}

ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById('root')
)
