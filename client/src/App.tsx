import React from 'react';
// app renders 1 component -- Home Screen --

// importing browser capabilities
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// importing HomeScreen and router components
import HomeScreen from './containers/HomeScreen';
import FailureReports from './containers/HomeScreen/FailureReports';
import Metrics from './containers/HomeScreen/Metrics';

const App: React.FC = () => {
  return (
    <>
      <div>KafkaFix logo</div>
      <Router>
        <Switch>
          <Route path='/' exact component={HomeScreen} />
          <Route path='/metrics' component={Metrics} />
          <Route path='/failureReports' component={FailureReports} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
