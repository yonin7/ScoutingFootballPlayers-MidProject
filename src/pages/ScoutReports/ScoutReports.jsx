import { useState, useEffect } from 'react';
import ReportCard from '../../components/ReportCard/ReportCard';
import api from '../../api/report';
import './scoutreports.css';

const ScoutReports = ({ playerReportInfo, reportsCounterFunc }) => {
  const player = playerReportInfo;
  // const [reportsList, setReportsList] = useState(
  //   JSON.parse(localStorage.getItem('reports')) || []
  // );

  const [reportsList, setReportsList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      console.log(player.player_api_id);
      const data = await api.get(player.player_api_id);
      setReportsList([...reportsList, data.data.document]);
    };
    reportsCounterFunc(reportsList.length);
    fetchData();
  }, []);

  // const handleDelete = (id) => {
  //   let newList = reportsList.filter((playerCard) => playerCard.id !== id);
  //   setReportsList(newList);
  // };
  const handleDelete = async (id) => {
    await api.delete(id);
    let apiData = reportsList.filter(
      (playerObj) => playerObj.player_api_id !== id
    );
    console.log(apiData);

    setReportsList({ reportsList: apiData });
  };

  // useEffect(() => {
  //   const isAlreadyExistsPlayer = reportsList.find(
  //     (report) => report.player._id === player._id
  //   );

  //   if (player && !isAlreadyExistsPlayer) {
  //     reportsCounterFunc(localStorage.length);
  //     console.log(player);
  //     const newReports = [...reportsList, { player }];
  //     setReportsList(newReports);
  //     localStorage.setItem('reports', JSON.stringify(newReports));
  //   }
  // }, [reportsList, player, reportsCounterFunc]);

  return (
    <div className="reports__container">
      <div className="displaycard">
        {reportsList &&
          reportsList?.map((report) => {
            return (
              <div key={report.player_api_id}>
                <ReportCard
                  report={report}
                  handleDelete={handleDelete}
                  img={`${player.image}_120.png`}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ScoutReports;
