const ReportCard = ({ report, setReport }) => {
  const handleUpdate = (property) => (e) => {
    setReport(property, e.target.value, report.id);
  };

  return (
    <div>
      {' '}
      {/* Header */}
      {report.player && (
        <div>
          {' '}
          <h3>{report.player.image}</h3>
          <h4>{report.player.name}</h4>
          <h5>{report.player.team}</h5>
        </div>
      )}
      <div>
        Pace:{' '}
        <input
          type="number"
          value={report.pace || ''}
          onChange={handleUpdate('pace')}
        />
        Dribling:{' '}
        <input
          type="number"
          value={report.dribling || ''}
          onChange={handleUpdate('dribling')}
        />
        Shoting:{' '}
        <input
          type="number"
          value={report.shoting || ''}
          onChange={handleUpdate('shoting')}
        />
        Passing:{' '}
        <input
          type="number"
          value={report.passing || ''}
          onChange={handleUpdate('passing')}
        />
        Defence:{' '}
        <input
          type="number"
          value={report.defence || ''}
          onChange={handleUpdate('defence')}
        />
        Phisicl:{' '}
        <input
          type="number"
          value={report.phisicl || ''}
          onChange={handleUpdate('phisicl')}
        />
      </div>
    </div>
  );
};

export default ReportCard;
