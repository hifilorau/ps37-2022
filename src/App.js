import logo from './logo.svg';
import './App.css';
import Home from './containers/Home/home.jsx'
import Header from './components/header.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  
  return (
    <Router>
     <Header />
     <Switch>
          <Route path="/">
            <Home />
          </Route>
       
        </Switch>
    </Router>
  );
}

export default App;
