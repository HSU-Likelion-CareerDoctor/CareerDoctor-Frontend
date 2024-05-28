import React from 'react';

const DiagnosisResult = ({ title, data }) => {
  return (
    <div>
      <h2>{title}</h2>
      {data.map((item, index) => (
        <div key={index}>
          <span>{item.rank}위</span>
          <span>{item.company}</span>
          <span>{item.percentage}%</span>
        </div>
      ))}
    </div>
  );
};

export default DiagnosisResult;