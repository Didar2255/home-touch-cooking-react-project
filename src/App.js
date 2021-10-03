import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../src/pages/Home/Home'
import CookingClass from '../src/pages/CookingClass/CookingClass'
import Review from '../src/pages/Review/Review'
import About from '../src/pages/About/About'
import NotFound from '../src/pages/NotFound/NotFound'
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/service'>
            <CookingClass></CookingClass>
          </Route>
          <Route path='/review'>
            <Review></Review>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
