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
    { label: '1위', value: 10 },
    { label: '1위', value: 10 },
    { label: '1위', value: 10 },
    { label: '1위', value: 10 } 
  ];

  const educationMaxValue = Math.max(...educationData.map(d => d.value));
  const careerMaxValue = Math.max(...careerData.map(d => d.value));

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
    </DiagnosisWrapper>
  );
};

export default DiagnosisContent;
