import React from 'react';
import './reportinput.css';

const ReportInput = ({ id, Skill, report, handleInputDelete, setReport }) => {
  const handleUpdate = (property) => (e) => {
    console.log(report);
    setReport(property, e.target.value, report.player._id);
  };
  return (
    <div className="inputcontainer">
      <div
        className="deleteBTN"
        type="submit"
        onClick={() => handleInputDelete(id)}
      >
        ❌
      </div>
      <label>{Skill}:</label>
      <input
        type="text"
        value={report.value}
        onChange={handleUpdate(`${Skill}`)}
      />
    </div>
  );
};

export default ReportInput;
