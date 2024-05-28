import React from 'react';

const EducationResults = ({ data }) => {
  return (
    <div>
      <h2>학력 진단 결과</h2>
      {data.map((item, index) => (
        <div key={index}>
          <span>{item.label}</span>
          <div style={{ width: `${item.percentage}%`, backgroundColor: 'blue' }}>
            {item.percentage}%
          </div>
        </div>
      ))}
    </div>
  );
};

export default EducationResults;