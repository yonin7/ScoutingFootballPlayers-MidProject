import { useState } from 'react';
import './reportcard.css';
import Input from '../ReportInput/ReportInput';

const ReportCard = ({ report, handleDelete }) => {
  const [skills, setSkills] = useState([
    'Pace',
    'Dribbling',
    'Shooting',
    'Passing',
    'Defence',
    'Physical',
  ]);
  const [newSkills, setNewSkills] = useState([]);

  const setReport = (property, value, id) => {
    console.log(property, value, id);
    const newReports = skills.map((report) =>
      report.id === id ? { ...report, [property]: value } : report
    );

    setSkills(newReports);
  };

  const handleCreate = (e) => {
    const newSkills = [...skills];
    newSkills.push(e.target.value);
    setNewSkills(newSkills);
  };
  const submitCreation = () => {
    setSkills(newSkills);
  };
  const handleInputDelete = (id) => {
    console.log(id);
    let newSkillsList = skills.filter((playerCard, index) => index !== id);
    setSkills(newSkillsList);
  };

  return (
    <div className="report__container">
      <input
        className="Delete"
        type="submit"
        onClick={() => handleDelete(report.id)}
        value="❌"
      />{' '}
      {/* Header */}
      {report.player && (
        <div>
          {' '}
          <img src={`${report.player.image}_120.png`} />
          {}
          <h4>{report.player.player_name}</h4>
          <h5>{report.player.team}</h5>
        </div>
      )}
      <div>
        {report.player &&
          skills.map((skill, index) => {
            return (
              <div className="" key={index}>
                <Input
                  id={index}
                  Skill={skill}
                  handleInputDelete={handleInputDelete}
                  report={report}
                  setReport={setReport}
                />
              </div>
            );
          })}
        {report.player && (
          <div className="createNewInput">
            <input type="text" onChange={(e) => handleCreate(e)} />
            <input
              type="submit"
              value="Add Skill"
              onClick={() => submitCreation()}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ReportCard;
