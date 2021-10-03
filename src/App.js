import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../src/pages/Home/Home'
import CookingClass from '../src/pages/CookingClass/CookingClass'
import Review from '../src/pages/Review/Review'
import About from '../src/pages/About/About'

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
