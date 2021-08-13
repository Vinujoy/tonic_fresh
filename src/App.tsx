// @ts-nocheck
import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store'
import HomePage from './containers/HomePage/HomePage';
import About from './containers/About/About';
import Navigation from './containers/Navigation/Navigation';
import Footer from './containers/Footer/Footer';
import VideoPlayer from './containers/VideoPlayer/VideoPlayer';
import DetailScreen from './containers/DetailScreen/DetailScreen';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navigation />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/about-us" component={About} />
            <Route path="/video" component={VideoPlayer} />
            <Route path="/product-detail/:id" component={DetailScreen} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </Provider>

  );
}

export default App;
