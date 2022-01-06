import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import ProtectedRoute from './ProtectedRoute';
import Home from '../pages/Home/Home';
import Search from '../pages/Search/Search';
import Comparison from '../pages/Comparison/Comparison';
import ScoutReports from '../pages/ScoutReports/ScoutReports';
import Login from '../pages/Login/Login';

const AppRoutes = () => {
  const [reportsCounter, setReportsCounter] = useState(0);
  const [playerInfo, setPlayerInfo] = useState([]);
  const [playerReportInfo, setPlayerReportInfo] = useState({});
  const reportsCounterFunc = (num) => {
    setReportsCounter(num);
  };
  const selectedPlayer = (data) => {
    console.log(data);
    let newData = [...playerInfo];
    if (newData.length >= 2) {
      newData.shift();
      newData.push(data);
    } else newData.push(data);
    setPlayerInfo(newData);
    console.log(playerInfo);
  };
  const selectedPlayerReport = (data) => {
    console.log(data);
    setPlayerReportInfo(data);
    console.log(playerReportInfo);
  };
  return (
    <Router>
      <Navbar reportsCounter={reportsCounter} />
      <Switch>
        <ProtectedRoute path="/" exact component={Home} />
        <ProtectedRoute
          path="/search"
          exact
          component={() => (
            <Search
              selectedPlayer={selectedPlayer}
              selectedPlayerReport={selectedPlayerReport}
            />
          )}
        />
        <ProtectedRoute
          path="/comparison"
          exact
          component={(props) => (
            <Comparison {...props} playerInfo={playerInfo} />
          )}
        />
        <ProtectedRoute
          path="/scoutReports"
          exact
          component={(props) => (
            <ScoutReports
              {...props}
              reportsCounterFunc={reportsCounterFunc}
              playerReportInfo={playerReportInfo}
            />
          )}
        />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  );
};
export default AppRoutes;
