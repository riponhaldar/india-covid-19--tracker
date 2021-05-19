import India from './pages/India'
import Footer from './component/Footer'
import Navbar from './component/Navbar/Navbar'
import World from './pages/Wold'
import About from './component/About/About'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' exact component={India} />
          <Route exact path='/World' component={World} />
          <Route exact path='/About' component={About} />
          {/* <Route component={ErrorPage} /> */}
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
