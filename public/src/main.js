import React, {Component}  from "react";
import {render} from "react-dom";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, hashHistory} from "react-router";

import HomePage from "./components/HomePage";
import Collocation from "./components/Collocation";
import Communication from "./components/Communication";
import Gossip from "./components/Gossip";
import Makeups from "./components/Makeups";
import PersonPage from "./components/PersonPage";
import PopularShare from "./components/PopularShare";

class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

render(
  <App/>,
  document.getElementById("app")
);

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={HomePage}/>
      <Route path='collocation' component={Collocation}/>
      <Route path='communication' component={Communication}/>
      <Route path='gossip' component={Gossip}/>
      <Route path='makeups' component={Makeups}/>
      <Route path='personPage' component={PersonPage}/>
      <Route path='popularShare' component={PopularShare}/>
    </Route>
  </Router>
  , document.getElementById("app")
);
