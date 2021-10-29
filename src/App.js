import logo from './logo.svg';
import './App.css';
import Home from './containers/Home/home.jsx'
import Info from './containers/About/about.jsx'
import Header from './components/header.jsx'
import Events from './containers/Events/events.jsx'
import Future from './containers/Future/future.jsx'
import Footer from './components/footer.jsx'
import VaporPlanes from './containers/VaporPlanes/vaporPlanes.jsx'
import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import Art from './containers/Art/art.jsx'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const getLibrary = (provider, connector) => {
  return new Web3Provider(provider)
}

const App = () => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
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
            <Route path="/art">
              <Art />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          
        
          </Switch>
          {/* <Footer /> */}
          </div>
      </Router>
    </Web3ReactProvider>
  );
}

export default App;
