import { useState, useEffect } from 'react';
import ReportCard from '../../components/ReportCard/ReportCard';
import { v4 as uuid } from 'uuid';

const ScoutReports = ({ playerInfo, reportsCounterFunc, ...props }) => {
  const player = props?.location?.state?.player;
  const [reportsList, setReportsList] = useState(
    JSON.parse(localStorage.getItem('reports')) || []
  );

  useEffect(() => {
    const isAlreadyExistsPlayer = reportsList.find(
      (report) => report?.player?.name === player?.name
    );

    if (player && !isAlreadyExistsPlayer) {
      reportsCounterFunc();
      const newReports = [...reportsList, { id: uuid(), player }];
      setReportsList(newReports);
      localStorage.setItem('reports', JSON.stringify(newReports));
    }
  }, [reportsList, player, reportsCounterFunc]);

  const setReport = (property, value, id) => {
    const newReports = reportsList.map((report) =>
      report.id === id ? { ...report, [property]: value } : report
    );

    setReportsList(newReports);
    localStorage.setItem('reports', JSON.stringify(newReports));
  };

  return (
    <div className="reports__container">
      ScoutReports
      <div>
        {reportsList.map((report) => (
          <ReportCard key={report.name} report={report} setReport={setReport} />
        ))}
      </div>
    </div>
  );
};

export default ScoutReports;
