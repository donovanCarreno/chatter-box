import {BrowserRouter as Router, Route} from 'react-router-dom'
import Landing from '../Auth'

function AppRouter() {
  return (
    <Router>
      <Route path='/' component={Landing} />
    </Router>
  )
}

export default AppRouter
