import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Home from '../pages/Home/Home';
import Search from '../pages/Search/Search';
import Comparison from '../pages/Comparison/Comparison';
import ScoutReports from '../pages/ScoutReports/ScoutReports';
import Signup from '../pages/SignUp/Signup';
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
    setPlayerReportInfo(data);
    console.log(playerReportInfo);
  };

  return (
    <Router>
      <Navbar reportsCounter={reportsCounter} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Signup" exact component={Signup} />
        <Route path="/Login" exact component={Login} />
        <Route path="/search" exact>
          <Search
            selectedPlayer={selectedPlayer}
            selectedPlayerReport={selectedPlayerReport}
          />
        </Route>
        <Route path="/comparison" exact>
          <Comparison playerInfo={playerInfo} />
        </Route>
        <Route path="/scoutReports" exact>
          <ScoutReports
            reportsCounterFunc={reportsCounterFunc}
            playerReportInfo={playerReportInfo}
          />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRoutes;
