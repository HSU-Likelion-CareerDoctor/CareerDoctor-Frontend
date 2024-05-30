import React, { useState } from "react";
import styled from "styled-components";
import volunteerImage from "../../img/heart.png";
import certificationImage from "../../img/certificate.png";
import languageImage from "../../img/language.png";
import contestImage from "../../img/contest.png";

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
  cursor: pointer;
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

const DetailContainer = styled.div`
  margin-top: 2vw;
  background-color: #f9f9f9;
  padding: 1.5vw;
  border-radius: 10px;
  width: 100%;
  font-family: "Noto Sans KR";
  font-size: 1vw;
`;

const Prescription = () => {
  const [selectedBox, setSelectedBox] = useState(null);

  const handleClick = (boxType) => {
    setSelectedBox(selectedBox === boxType ? null : boxType);
  };

  const userId = localStorage.getItem("userId");

  return (
    <PrescriptionContainerWrapper>
      <PrescriptionHeader>{userId}님에게 처방한 스펙입니다.</PrescriptionHeader>
      <PrescriptionBoxContainer>
        <ArrowButton>{"<"}</ArrowButton>
        <PrescriptionBox onClick={() => handleClick("volunteer")}>
          <Volunteer src={volunteerImage} alt="volunteerImage" />
          지역 사회 <br /> 봉사
        </PrescriptionBox>
        <PrescriptionBox onClick={() => handleClick("certification")}>
          <Certification src={certificationImage} alt="certificationImage" />
          영어 스피킹 <br /> 자격증
        </PrescriptionBox>
        <PrescriptionBox onClick={() => handleClick("language")}>
          <Language src={languageImage} alt="languageImage" />
          영어 <br />언어
        </PrescriptionBox>
        <PrescriptionBox onClick={() => handleClick("contest")}>
          <Contest src={contestImage} alt="contestImage" />
          스피킹 콘테스트<br />공모전
        </PrescriptionBox>
        <ArrowButton>{">"}</ArrowButton>
      </PrescriptionBoxContainer>
      <Text>처방 내용을 클릭하여 자세한 정보를 확인해보세요!</Text>
      {selectedBox && (
        <DetailContainer>
          {selectedBox === "volunteer" && (
            <>
              <div>처방 이유: 봉사 활동을 통해 사회적 책임감을 높일 수 있습니다.</div>
              <div>활동 설명: 지역 사회 봉사활동 참여</div>
              <div>추천 기간: 3개월</div>
            </>
          )}
          {selectedBox === "certification" && (
            <>
              <div>처방 이유: 자격증을 통해 전문성을 증명할 수 있습니다.</div>
              <div>활동 설명: 관련 자격증 취득 준비</div>
              <div>추천 기간: 6개월</div>
            </>
          )}
          {selectedBox === "language" && (
            <>
              <div>처방 이유: 외국어 능력을 통해 글로벌 역량을 강화할 수 있습니다.</div>
              <div>활동 설명: 외국어 학습 및 시험 준비</div>
              <div>추천 기간: 1년</div>
            </>
          )}
          {selectedBox === "contest" && (
            <>
              <div>처방 이유: 공모전을 통해 창의력과 문제 해결 능력을 키울 수 있습니다.</div>
              <div>활동 설명: 다양한 공모전 참여</div>
              <div>추천 기간: 6개월</div>
            </>
          )}
        </DetailContainer>
      )}
    </PrescriptionContainerWrapper>
  );
};

export default Prescription;
