import { useState, useEffect } from 'react';
import ReportCard from '../../components/ReportCard/ReportCard';
import { v4 as uuid } from 'uuid';
import './scoutreports.css';

const ScoutReports = ({ playerReportInfo, reportsCounterFunc }) => {
  const handleDelete = (id) => {
    console.log(id);
    let newList = reportsList.filter((playerCard) => playerCard.id !== id);
    setReportsList(newList);
  };

  const player = playerReportInfo;
  const [reportsList, setReportsList] = useState(
    JSON.parse(localStorage.getItem('reports')) || []
  );

  useEffect(() => {
    const isAlreadyExistsPlayer = reportsList.find(
      (report) => report?.player?.name === player?.name
    );

    if (player && !isAlreadyExistsPlayer) {
      reportsCounterFunc(localStorage.length);
      const newReports = [...reportsList, { id: uuid(), player }];
      setReportsList(newReports);
      localStorage.setItem('reports', JSON.stringify(newReports));
    }
  }, [reportsList, player, reportsCounterFunc]);

  return (
    <div className="reports__container">
      <div className="displaycard">
        {reportsList.map((report) => {
          return (
            <div key={report.id}>
              <ReportCard report={report} handleDelete={handleDelete} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ScoutReports;
