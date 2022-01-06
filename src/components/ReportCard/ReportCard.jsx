import { useState } from 'react';
import './reportcard.css';
import Input from '../ReportInput/ReportInput';
import api from '../../api/report';

const ReportCard = ({
  report,
  report: { attacking_work_rate, sprint_speed, defensive_work_rate, potential },
  handleDelete,
}) => {
  const [skills, setSkills] = useState([
    'attacking_work_rate',
    'sprint_speed',
    'defensive_work_rate',
    'potential',
  ]);

  const setReport = (property, value, id) => {
    console.log(property, value, id);
    const newReports = skills.map((report) =>
      report.id === id ? { ...report, [property]: value } : report
    );

    setSkills(newReports);
  };

  const handleUpdate = async (field, value, id) => {
    await api.put(field, value, id);
  };

  const handleCreate = async () => {
    let id = report.player_api_id;
    let newSkill = document.getElementById('newText');
    await api.post(newSkill, '', id);
    setSkills([...skills, newSkill]);
  };

  const handleDeleteInput = async (id, field) => {
    await api.delete(id, field);
    const newSkills = skills.fillter((skill) => skill !== field);
    setSkills(newSkills);
  };

  return (
    <div className="report__container">
      <input
        className="Delete"
        type="submit"
        value="❌"
        onClick={() => handleDelete(report.player_api_id)}
      />{' '}
      {/* Header */}
      {report && (
        <div>
          {' '}
          <img src={`${report.image}_120.png`} />
          {}
          <h4>{report.player_name}</h4>
          <h5>{report.team}</h5>
        </div>
      )}
      <div>
        {report &&
          skills.map((skill, index) => {
            return (
              <div className="" key={index}>
                <Input
                  id={index}
                  Skill={skill}
                  report={report}
                  setReport={setReport}
                  handleUpdate={handleUpdate}
                  handleDeleteInput={handleDeleteInput}
                />
              </div>
            );
          })}
        {report && (
          <div className="createNewInput">
            <input id="newText" type="text" />
            <input type="submit" value="Add Skill" onClick={handleCreate} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ReportCard;
