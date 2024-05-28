import React, { useState } from 'react';

const ActivityResult = ({ tabs, data }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div>
      <h2>대외활동 진단 결과</h2>
      <div>
        {tabs.map((tab) => (
          <button key={tab} onClick={() => setActiveTab(tab)}>
            {tab}
          </button>
        ))}
      </div>
      {data[activeTab].map((item, index) => (
        <div key={index}>
          <span>{item.rank}위</span>
          <span>{item.company}</span>
          <span>{item.percentage}%</span>
        </div>
      ))}
    </div>
  );
};

export default ActivityResult;