import React from "react";
import styled from "styled-components";

const DiagnosisWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1vw;
  margin-top: 2vw;
  width: 60%;
`;

const DiagnosisContainer = styled.div`
  margin-top: 2vw;
  padding: 2vw;
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0.2vw 0.3vw rgba(0, 0, 0, 0.1);
  font-size: 1vw;
`;

const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 15vw;
  margin-top: 2vw;
`;

const BarContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1vw;
  width: 100%;
`;

const Bar = styled.div`
  position: relative;
  height: 1.5vw;
  width: ${(props) => props.width * 0.5}%;

  display: flex;
  justify-content: flex-end;
  padding-right: 0.5vw;
  background-color: ${(props) => (props.isMax ? '#558DFA' : '#D3D3D3')};
  border: none;
`;

const Label = styled.div`
  width: 8vw;
  font-size: 1vw;
  margin-right: 1vw;
  text-align: left;
`;

const Value = styled.span`
  position: absolute;
  right: -2vw;
  font-size: 0.8vw;
`;

const Text = styled.div`
  font-size: 1vw;
  font-weight: bold;
`;

const Graph = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 1.5vw;
  margin-bottom: 1vw;
`;

const Green = styled.span`
  color: green;
`;

const Red = styled.span`
  color: red;
`;

const DiagnosisContent = () => {
  const educationData = [
    { label: '대학원', value: 10 },
    { label: '대학교(4년)', value: 60 },
    { label: '대학교(2,3년)', value: 16 },
    { label: '고등학교', value: 8 },
    { label: '검정고시', value: 4 },
    { label: '기타', value: 2 },
  ];

  const careerData = [
    { label: '1위', value: 10 },
    { label: '2위', value: 20 },
    { label: '3위', value: 30 },
    { label: '4위', value: 40 },
    { label: '5위', value: 50 } 
  ];

  const certificateData = [
    { label: '국가공인자격증', value: 40 },
    { label: '민간자격증', value: 30 },
    { label: 'IT자격증', value: 20 },
    { label: '어학자격증', value: 10 }
  ];

  const activityData = [
    { label: '봉사활동', value: 20 },
    { label: '인턴십', value: 50 },
    { label: '동아리', value: 15 },
    { label: '해외경험', value: 15 }
  ];

  const languageData = [
    { label: '영어', value: 50 },
    { label: '중국어', value: 20 },
    { label: '일본어', value: 15 },
    { label: '기타', value: 15 }
  ];

  const otherData = [
    { label: '기타 활동 1', value: 25 },
    { label: '기타 활동 2', value: 35 },
    { label: '기타 활동 3', value: 40 }
  ];

  const educationMaxValue = Math.max(...educationData.map(d => d.value));
  const careerMaxValue = Math.max(...careerData.map(d => d.value));
  const certificateMaxValue = Math.max(...certificateData.map(d => d.value));
  const activityMaxValue = Math.max(...activityData.map(d => d.value));
  const languageMaxValue = Math.max(...languageData.map(d => d.value));
  const otherMaxValue = Math.max(...otherData.map(d => d.value));

  return (
    <DiagnosisWrapper>
      <DiagnosisContainer>
        <Text>학력 진단 결과</Text>
        <ChartContainer>
          {educationData.map((item, index) => (
            <BarContainer key={index}>
              <Label>{item.label}</Label>
              <Bar width={(item.value / educationMaxValue) * 100} isMax={item.value === educationMaxValue}>
                <Value>{item.value}%</Value>
              </Bar>
            </BarContainer>
          ))}
        </ChartContainer>
      </DiagnosisContainer>
      <DiagnosisContainer>
        <Text>경력사항 진단 결과</Text>
        <ChartContainer>
          <Graph>
            <Red>경력없음</Red>
            <Green>경력있음</Green>
          </Graph>
          {careerData.map((item, index) => (
            <BarContainer key={index}>
              <Label>{item.label}</Label>
              <Bar width={(item.value / careerMaxValue) * 100} isMax={item.value === careerMaxValue}>
                <Value>{item.value}%</Value>
              </Bar>
            </BarContainer>
          ))}
        </ChartContainer>
      </DiagnosisContainer>
      <DiagnosisContainer>
        <Text>자격증 진단 결과</Text>
        <ChartContainer>
          {certificateData.map((item, index) => (
            <BarContainer key={index}>
              <Label>{item.label}</Label>
              <Bar width={(item.value / certificateMaxValue) * 100} isMax={item.value === certificateMaxValue}>
                <Value>{item.value}%</Value>
              </Bar>
            </BarContainer>
          ))}
        </ChartContainer>
      </DiagnosisContainer>
      <DiagnosisContainer>
        <Text>대외활동 진단 결과</Text>
        <ChartContainer>
          {activityData.map((item, index) => (
            <BarContainer key={index}>
              <Label>{item.label}</Label>
              <Bar width={(item.value / activityMaxValue) * 100} isMax={item.value === activityMaxValue}>
                <Value>{item.value}%</Value>
              </Bar>
            </BarContainer>
          ))}
        </ChartContainer>
      </DiagnosisContainer>
      <DiagnosisContainer>
        <Text>언어능력 진단 결과</Text>
        <ChartContainer>
          {languageData.map((item, index) => (
            <BarContainer key={index}>
              <Label>{item.label}</Label>
              <Bar width={(item.value / languageMaxValue) * 100} isMax={item.value === languageMaxValue}>
                <Value>{item.value}%</Value>
              </Bar>
            </BarContainer>
          ))}
        </ChartContainer>
      </DiagnosisContainer>
      <DiagnosisContainer>
        <Text>기타 진단 결과</Text>
        <ChartContainer>
          {otherData.map((item, index) => (
            <BarContainer key={index}>
              <Label>{item.label}</Label>
              <Bar width={(item.value / otherMaxValue) * 100} isMax={item.value === otherMaxValue}>
                <Value>{item.value}%</Value>
              </Bar>
            </BarContainer>
          ))}
        </ChartContainer>
      </DiagnosisContainer>
    </DiagnosisWrapper>
  );
};

export default DiagnosisContent;
