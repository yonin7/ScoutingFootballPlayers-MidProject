import React from 'react';
import './reportinput.css';

const ReportInput = ({ id, Skill, report, handleInputDelete, setReport }) => {
  const handleUpdate = (property) => (e) => {
    setReport(property, e.target.value, report.id);
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
        type="number"
        // value={report.value || ''}
        onChange={handleUpdate(`${Skill}`)}
      />
    </div>
  );
};

export default ReportInput;
