import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'
import {Global, css} from '@emotion/core'
import Landing from './Landing'

import 'normalize.css'

function App() {
  return (
    <Fragment>
      <Global
        styles={css`
          * {
            font-family: Verdana, Geneva, Tahoma, sans-serif;
          }
        `}
      />
      <Landing />
    </Fragment>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
