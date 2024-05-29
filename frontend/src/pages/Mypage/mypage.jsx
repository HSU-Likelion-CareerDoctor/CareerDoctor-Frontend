import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SelectionCategory from "./SelectionCategory";
import Prescription from "./Prescription";
import Opinion from "./SpecOpinion";
import Balance from "./BalanceCategory";
import Header from "../../components/Header";
import axios from "axios";
import Config from "../../config/config";

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
  width: 60%;
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
  width: 60%;
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

  // &:hover {
  //   color: #ffffff;
  //   background-color: #007bff;
  // }

  &::after {
    content: "";
    position: absolute;
    left: 0vw;
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

const MyPage = () => {
  const [showDiagnosis, setShowDiagnosis] = useState(false);
  const [showPrescription, setShowPrescription] = useState(false);
  const [showOpinion, setShowOpinion] = useState(false);
  const [showBalance, setShowBalance] = useState(false);

  const userId = localStorage.getItem("userId");

  const handleSelectionButtonClick = () => {
    setShowDiagnosis(true);
    setShowPrescription(false);
    setShowBalance(false);

    const prescriptionurl = `${Config.baseURL}/api/careerdoctor/${userId}/prescription`;

    // prescriptionurl GET 요청
    axios
      .get(prescriptionurl, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("Prescription Data:", response.data);
      })
      .catch((error) => {
        console.error("Prescription Error:", error);
      });
  };

  const handlePrescriptionButtonClick = () => {
    setShowPrescription(true);
    setShowOpinion(false);
      setShowDiagnosis(false);
  };

  const handleOpinionButtonClick = () => {
         setShowDiagnosis(false);
    setShowOpinion(true);
      setShowPrescription(false);
  };

  const handleBalanceButtonClick = () => {
      setShowDiagnosis(false);
    setShowBalance(true);
        setShowOpinion(false);
  };


useEffect(() => {
  const specurl = `${Config.baseURL}/api/careerdoctor/${userId}/view-spec`;
  const opinionurl = `${Config.baseURL}/api/careerdoctor/reports/${userId}`;
  const posturl = `${Config.baseURL}/api/careerdoctor/posts/${userId}`;

  // posturl로 GET 요청
  axios
    .get(posturl, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      console.log("Post Data:", response.data);
    })
    .catch((error) => {
      console.error("Post Error:", error);
    });

  // opinionurl GET 요청
  axios
    .get(opinionurl, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      console.log("Opinion Data:", response.data);
    })
    .catch((error) => {
      console.error("Opinion Error:", error);
    });

  // specurl로 GET 요청
  axios
    .get(specurl, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      console.log("Spec Data:", response.data);
    })
    .catch((error) => {
      console.error("Spec Error:", error);
    });
}, [userId]);


  return (
    <>
    <Header/>
    <PageContainer>
      <ProfileSection>
        <ProfileImage></ProfileImage>
        <ProfileDetails>
          <InfoBox>
            <UserNameMetaBox>
              <UserName>{userId}</UserName>
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
          스펙 진단받기
        </SelectionButton>
        <SelectionButton onClick={handleOpinionButtonClick}>
          스펙 소견서
        </SelectionButton>
        <SelectionButton onClick={handleBalanceButtonClick}>
          취준밸런스
        </SelectionButton>
      </SelectionBarContainer>
      {/* 스펙진단받기클릭 */}
      {showDiagnosis && (
        <SelectionCategory
          handlePrescriptionButtonClick={handlePrescriptionButtonClick}
        />
      )}
      {/* 스펙진단서 스펙처방전 클릭*/}
      {showPrescription && <Prescription />}
      {showOpinion && <Opinion />}
      {showBalance && <Balance />}
    </PageContainer>
    </>
  );
};

export default MyPage;

