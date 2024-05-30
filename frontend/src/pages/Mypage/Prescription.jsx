// #마이페이지_스펙진단받기_받은 스펙처방전
import React from "react";
import styled from "styled-components";
import volunteerImage from "../../img/heart.png";
import certificationImage from "../../img/certificate.png";
import languageImage from "../../img/language.png";
import ContestImage from "../../img/contest.png";

const PrescriptionContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60%;
  max-width: 1200px;
  background-color: #ffffff;
  border-radius: 10px;
  margin-top: 3vw;
  padding: 20px;
`;

const PrescriptionHeader = styled.div`
  font-family: "Noto Sans KR";
  font-size: 1.2vw;
  font-weight: 700;
  margin-bottom: 1vw;
`;

const PrescriptionBoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const ArrowButton = styled.button`
  font-size: 2vw;
  background: none;
  border: none;
  cursor: pointer;
  color: #000000;
  transition: color 0.3s;

  &:hover {
    color: #007bff;
  }
`;

const PrescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #efefef;
  padding: 2vw;
  border-radius: 10px;
  flex: 1;
  margin: 0 1vw;
  text-align: center;
  font-family: "Noto Sans KR";
  font-size: 1vw;
  font-weight: 600;
  gap: 1vw;
`;

const Volunteer = styled.img`
  width: 40%;
`;
const Certification = styled.img`
  width: 40%;
`;
const Language = styled.img`
  width: 40%;
`;
const Contest = styled.img`
  width: 40%;
`;

const Text = styled.div`
  margin-top: 1vw;
  color: #5e5e5e;
  font-size: 1vw;
  font-weight: 700;
`;

const Prescription = () => {


  const userId = localStorage.getItem("userId");

  return (
    <PrescriptionContainerWrapper>
      <PrescriptionHeader>{userId}님에게 처방한 스펙입니다.</PrescriptionHeader>
      <PrescriptionBoxContainer>
        <ArrowButton>{"<"}</ArrowButton>
        <PrescriptionBox>
          <Volunteer src={volunteerImage} alt="volunteerImage" />
          00000000 봉사<br></br> 봉사
        </PrescriptionBox>
        <PrescriptionBox>
          <Certification src={certificationImage} alt="certificationImage" />
          00000000 자격증<br></br> 자격증
        </PrescriptionBox>
        <PrescriptionBox>
          <Language src={languageImage} alt="languageImage" />
          00언어 <br></br>언어
        </PrescriptionBox>
        <PrescriptionBox>
          <Contest src={ContestImage} alt="ContestImage" />
          000공모전<br></br>공모전
        </PrescriptionBox>
        <ArrowButton>{">"}</ArrowButton>
      </PrescriptionBoxContainer>
      <Text>처방 내용을 클릭하여 자세한 정보를 확인해보세요!</Text>
    </PrescriptionContainerWrapper>
  );
};

export default Prescription;
