import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Home from '../pages/Home/Home';
import Search from '../pages/Search/Search';
import Comparison from '../pages/Comparison/Comparison';
import ScoutReports from '../pages/ScoutReports/ScoutReports';

const AppRoutes = () => {
  const [reportsCounter, setReportsCounter] = useState(0);
  const [playerInfo, setPlayerInfo] = useState([]);

  const reportsCounterFunc = () => {
    setReportsCounter(reportsCounter + 1);
  };
  const selectedPlayer = (data) => {
    let newData = [...playerInfo];
    if (newData.length >= 3) {
      newData.shift();
      newData.push(data);
    } else newData.push(data);
    setPlayerInfo(newData);
    console.log(playerInfo);
  };
  return (
    <Router>
      <Navbar reportsCounter={reportsCounter} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/search" exact>
          <Search selectedPlayer={selectedPlayer} />
        </Route>
        <Route path="/comparison" exact>
          <Comparison playerInfo={playerInfo} />
        </Route>
        <Route
          path="/scoutReports"
          exact
          render={(props) => (
            <ScoutReports
              reportsCounterFunc={reportsCounterFunc}
              playerInfo={playerInfo}
              {...props}
            />
          )}
        />
      </Switch>
    </Router>
  );
};

export default AppRoutes;
