import React from 'react';

const CareerMarketResults = ({ data }) => {
  return (
    <div>
      <h2>경력시장 진단 결과</h2>
      <div>
        <span>경력 없음</span>
        <div style={{ width: `${data.noExperiencePercentage}%`, backgroundColor: 'grey' }}>
          {data.noExperiencePercentage}%
        </div>
      </div>
      <div>
        <span>경력 있음</span>
        <div style={{ width: `${data.withExperiencePercentage}%`, backgroundColor: 'blue' }}>
          {data.withExperiencePercentage}%
        </div>
      </div>
      {data.ranks.map((rank, index) => (
        <div key={index}>
          <span>{rank.position}위</span>
          <span>{rank.company}</span>
          <span>{rank.percentage}%</span>
        </div>
      ))}
    </div>
  );
};

export default CareerMarketResults;