import logo from './logo.svg';
import './App.css';
import Home from './containers/Home/home.jsx'
import Info from './containers/About/about.jsx'
import Header from './components/header.jsx'
import Events from './containers/Events/events.jsx'
import Future from './containers/Future/future.jsx'
import Footer from './components/footer.jsx'
import VaporPlanes from './containers/VaporPlanes/vaporPlanes.jsx'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  
  return (
    <Router>
      <div className="ps37-app">
     {/* <Header /> */}
     <Switch>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/info">
            <Info />
          </Route>
          <Route path="/future">
            <Future />
          </Route>
          <Route path="/vaporplanes">
            <VaporPlanes />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        
       
        </Switch>
        <Footer />
        </div>
    </Router>
  );
}

export default App;
