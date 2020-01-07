import React from "react";
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import StationTable from "./Station/StationTable";
import StationInfo from "./Station/StationInfo";

const App = props => {
  return (
    <Router>
          <Route exact path='/' component={StationTable}></Route>
          <Route path='/station' component={StationInfo}></Route>
      </Router>
  );
};

export default App;
