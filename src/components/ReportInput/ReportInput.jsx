import React from 'react';
import './reportinput.css';

const ReportInput = ({
  id,
  Skill,
  report,
  handleInputDelete,
  handleUpdate,
}) => {
  const handleUpdateInput = (property) => (e) => {
    // setReport(property, e.target.value, report.player._id);
    handleUpdate(property, e.target.value, report.player._id);
  };
  const handleDelete = (property) => (e) => {
    handleInputDelete(property, e.target.value, report.player._id);
  };
  return (
    <div className="inputcontainer">
      <div
        className="deleteBTN"
        type="submit"
        onClick={() => handleDelete(`${Skill}`)}
      >
        ❌
      </div>
      {/* <button type="submit" onClick={() => handleUpdateInput()}>
        edit
      </button> */}
      <label>{Skill}:</label>
      <input
        type="text"
        value={report.value}
        onChange={handleUpdateInput(`${Skill}`)}
      />
    </div>
  );
};

export default ReportInput;
