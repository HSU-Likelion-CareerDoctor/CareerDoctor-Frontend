// mypage.jsx
import React, { useState } from "react";
import styled from "styled-components";
import volunteerImage from "../../img/heart.png"; 
import certificationImage from "../../img/certificate.png";
import languageImage from "../../img/language.png";
import ContestImage from "../../img/contest.png";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  max-width: 1100px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
`;

const ProfileImage = styled.div`
  background-color: #616161;
  width: 8vw;
  height: 8vw;
  border-radius: 50%;
  margin-right: 2vw;
`;

const ProfileDetails = styled.div`
  flex-grow: 1;
`;

const InfoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 0.8vw;
`;

const UserNameMetaBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5vw;
`;

const UserName = styled.div`
  color: #000;
  font-family: "Noto Sans KR";
  font-size: 1.2vw;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
`;

const Meta = styled.div`
  color: #1dac67;
  font-family: "Noto Sans KR";
  font-size: 0.9vw;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Box = styled.div`
  background-color: #efefef;
  padding: 0.5vw;
  border-radius: 1vw;
`;

const SpecBox = styled.div`
  display: flex;
  gap: 0.8vw;
  margin-top: 1vw;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 0.5vw 1.2vw;
  font-size: 0.9vw;
  font-weight: 600;
  border: none;
  border-radius: 0.5vw;
  cursor: pointer;
  color: #aeaeae;

  &:hover {
    background-color: #007bff;
    color: white;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.8vw;
`;

const Button2 = styled.button`
  color: #000000;
  background-color: white;
  font-size: 0.9vw;
  font-weight: 600;
  border: none;
  &:hover {
    color: gray;
  }
`;

const SelectionBarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 2vw;
  width: 90%;
  max-width: 1200px;
  background-color: #efefef;
`;

const SelectionButton = styled.button`
  position: relative;
  flex: 1;
  padding: 1vw;
  font-size: 1vw;
  font-weight: 600;
  border: none;
  background: none;
  cursor: pointer;
  color: black;
  transition: color 0.3s;

  &:hover {
    color: #ffffff;
    background-color: #007bff;
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -0.2vw; /* 버튼 하단에서 약간의 간격 */
    width: 100%;
    height: 0.2vw;
    background-color: transparent;
    transition: background-color 0.3s;
  }

  &:hover::after {
    background-color: #007bff;
  }
`;

const SelectionCategory = styled.div`
  display: flex;
  width: 90%;
  max-width: 1200px;
`;

const Category = styled.button`
  display: flex;
  padding: 0.5vw 1.2vw;
  margin-top: 1vw;
  margin-right: 1vw;
  font-size: 0.9vw;
  font-weight: 600;
  border: none;
  cursor: pointer;
  color: #000000;
  background-color: #d9d9d9;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #007bff;
    color: #ffffff;
  }
`;

const PrescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  max-width: 1200px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
  gap:1vw;
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


const MyPage = () => {
  const [showDiagnosis, setShowDiagnosis] = useState(false);
  const [showPrescription, setShowPrescription] = useState(false);

  const handleSelectionButtonClick = () => {
    setShowDiagnosis(true);
    setShowPrescription(false); // Reset prescription view
  };

  const handlePrescriptionButtonClick = () => {
    setShowPrescription(true);
  };

  return (
    <PageContainer>
      <ProfileSection>
        <ProfileImage></ProfileImage>
        <ProfileDetails>
          <InfoBox>
            <UserNameMetaBox>
              <UserName>닉네임닉네임닉네임</UserName>
              <Meta>👍 스펙 양호</Meta>
            </UserNameMetaBox>
            <ButtonGroup>
              <Button2>내 스펙 수정</Button2>
              <Button2>로그아웃</Button2>
            </ButtonGroup>
          </InfoBox>
          <SpecBox>
            <Box>
              <Button>스펙 공개</Button>
              <Button>스펙 비공개</Button>
            </Box>
          </SpecBox>
        </ProfileDetails>
      </ProfileSection>
      <SelectionBarContainer>
        <SelectionButton onClick={handleSelectionButtonClick}>
          스펙진단받기
        </SelectionButton>
        <SelectionButton>스펙소견서</SelectionButton>
        <SelectionButton>취준밸런스</SelectionButton>
      </SelectionBarContainer>
      {showDiagnosis && (
        <SelectionCategory>
          <Category>스펙진단서</Category>
          <Category onClick={handlePrescriptionButtonClick}>
            스펙처방전
          </Category>
        </SelectionCategory>
      )}
      {showPrescription && (
        <PrescriptionContainer>
          <PrescriptionHeader>00님에게 처방한 스펙입니다.</PrescriptionHeader>
          <PrescriptionBoxContainer>
            <ArrowButton>{"<"}</ArrowButton>
            <PrescriptionBox>
              <Volunteer src={volunteerImage} alt="volunteerImage" />
              00000000 봉사<br></br> 봉사
            </PrescriptionBox>
            <PrescriptionBox>
              <Certification
                src={certificationImage}
                alt="certificationImage"
              />
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
        </PrescriptionContainer>
      )}
    </PageContainer>
  );
};

export default MyPage;
