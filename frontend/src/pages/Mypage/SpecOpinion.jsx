// #마이페이지_스펙소견서
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const OpinionContainer = styled.div`
  width: 60%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, auto);
  gap: 2vw;
  margin-top: 2vw;
`;

const OpinionBox = styled.div`
  border: 1px solid #ccc;
  padding: 2vw;
  box-shadow: 0 0.2vw 0.3vw rgba(0, 0, 0, 0.1);
`;

const ProfileImage = styled.div`
  background-color: #616161;
  width: 2vw;
  height: 2vw;
  border-radius: 50%;
  margin-right: 0.5vw;
`;

const Content = styled.div`
  font-size: 1vw;
  font-weight: 600;
  margin-top: 1vw;
`;

const RecommendSpec = styled.div`
  margin-top: 1vw;
  font-size: 0.9vw;
  font-weight: bold;
`;

const RecommendSpecBoxContainer = styled.div`
  display: flex;
  margin-top: 0.5vw;
  gap: 0.5vw;
`;

const RecommendSpecBox = styled.div`
  font-size: 0.9vw;
  color: #000000;
  border: 1px solid #ccc;
  padding: 0.5vw;
  margin-bottom: 1vw;
`;

const FeedbackButton = styled(Link)`
  width: 100%;
  margin-top: 1vw;
  padding: 0.5vw 1vw;
  font-size: 0.9vw;
  font-weight: bold;
  border: none;
  background-color: #edf4f9;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #818181;
  }
`;

const InfoBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const UserNameMetaBox = styled.div`
  display: flex;
  gap: 0.5vw;
`;

const UserName = styled.div`
  color: #000;
  font-size: 1.2vw;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
`;

const Meta = styled.div`
  color: #1dac67;
  font-size: 0.9vw;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Date = styled.div`
  color: #000000;
  font-size: 0.9vw;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: auto;
`;

const AddBox = styled.button`
  display: flex;
  justify-content: center;
  width: 10%;
  margin-top: 2vw;
  margin-bottom: 2vw;
  padding: 0.5vw 1vw;
  font-size: 0.9vw;
  font-weight: bold;
  border: none;
  background-color: #ebebeb;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #818181;
  }
`;

const SpecOpinion = () => {
  return (
    <>
      <OpinionContainer>
        <OpinionBox>
          <InfoBox>
            <UserNameMetaBox>
              <ProfileImage></ProfileImage>
              <UserName>닉네임</UserName>
              <Meta>🔥스펙 우수</Meta>
            </UserNameMetaBox>
            <Date>0000.00.00</Date>
          </InfoBox>
          <Content>
            소견서 내용<br></br>소견서 내용<br></br>소견서 내용
          </Content>
          <RecommendSpec>추천 스펙</RecommendSpec>
          <RecommendSpecBoxContainer>
            <RecommendSpecBox>자격증</RecommendSpecBox>
            <RecommendSpecBox>자격증</RecommendSpecBox>
            <RecommendSpecBox>자격증</RecommendSpecBox>
          </RecommendSpecBoxContainer>
          <FeedbackButton to="/feedback">
            피드백 실천후기 작성하기
          </FeedbackButton>
        </OpinionBox>
        <OpinionBox>
          <InfoBox>
            <UserNameMetaBox>
              <ProfileImage></ProfileImage>
              <UserName>닉네임</UserName>
              <Meta>🔥스펙 우수</Meta>
            </UserNameMetaBox>
            <Date>0000.00.00</Date>
          </InfoBox>
          <Content>
            소견서 내용<br></br>소견서 내용<br></br>소견서 내용
          </Content>
          <RecommendSpec>추천 스펙</RecommendSpec>
          <RecommendSpecBoxContainer>
            <RecommendSpecBox>자격증</RecommendSpecBox>
            <RecommendSpecBox>자격증</RecommendSpecBox>
            <RecommendSpecBox>자격증</RecommendSpecBox>
          </RecommendSpecBoxContainer>
          <FeedbackButton to="/feedback">
            피드백 실천후기 작성하기
          </FeedbackButton>
        </OpinionBox>
        <OpinionBox>
          <InfoBox>
            <UserNameMetaBox>
              <ProfileImage></ProfileImage>
              <UserName>닉네임</UserName>
              <Meta>🔥스펙 우수</Meta>
            </UserNameMetaBox>
            <Date>0000.00.00</Date>
          </InfoBox>
          <Content>
            소견서 내용<br></br>소견서 내용<br></br>소견서 내용
          </Content>
          <RecommendSpec>추천 스펙</RecommendSpec>
          <RecommendSpecBoxContainer>
            <RecommendSpecBox>자격증</RecommendSpecBox>
            <RecommendSpecBox>자격증</RecommendSpecBox>
            <RecommendSpecBox>자격증</RecommendSpecBox>
          </RecommendSpecBoxContainer>
          <FeedbackButton to="/feedback">
            피드백 실천후기 작성하기
          </FeedbackButton>
        </OpinionBox>
        <OpinionBox>
          <InfoBox>
            <UserNameMetaBox>
              <ProfileImage></ProfileImage>
              <UserName>닉네임</UserName>
              <Meta>🔥스펙 우수</Meta>
            </UserNameMetaBox>
            <Date>0000.00.00</Date>
          </InfoBox>
          <Content>
            소견서 내용<br></br>소견서 내용<br></br>소견서 내용
          </Content>
          <RecommendSpec>추천 스펙</RecommendSpec>
          <RecommendSpecBoxContainer>
            <RecommendSpecBox>자격증</RecommendSpecBox>
            <RecommendSpecBox>자격증</RecommendSpecBox>
            <RecommendSpecBox>자격증</RecommendSpecBox>
          </RecommendSpecBoxContainer>
          <FeedbackButton to="/feedback">
            피드백 실천후기 작성하기
          </FeedbackButton>
        </OpinionBox>
        <OpinionBox>
          <InfoBox>
            <UserNameMetaBox>
              <ProfileImage></ProfileImage>
              <UserName>닉네임</UserName>
              <Meta>🔥스펙 우수</Meta>
            </UserNameMetaBox>
            <Date>0000.00.00</Date>
          </InfoBox>
          <Content>
            소견서 내용<br></br>소견서 내용<br></br>소견서 내용
          </Content>
          <RecommendSpec>추천 스펙</RecommendSpec>
          <RecommendSpecBoxContainer>
            <RecommendSpecBox>자격증</RecommendSpecBox>
            <RecommendSpecBox>자격증</RecommendSpecBox>
            <RecommendSpecBox>자격증</RecommendSpecBox>
          </RecommendSpecBoxContainer>
          <FeedbackButton to="/feedback">
            피드백 실천후기 작성하기
          </FeedbackButton>
        </OpinionBox>
        <OpinionBox>
          <InfoBox>
            <UserNameMetaBox>
              <ProfileImage></ProfileImage>
              <UserName>닉네임</UserName>
              <Meta>🔥스펙 우수</Meta>
            </UserNameMetaBox>
            <Date>0000.00.00</Date>
          </InfoBox>
          <Content>
            소견서 내용<br></br>소견서 내용<br></br>소견서 내용
          </Content>
          <RecommendSpec>추천 스펙</RecommendSpec>
          <RecommendSpecBoxContainer>
            <RecommendSpecBox>자격증</RecommendSpecBox>
            <RecommendSpecBox>자격증</RecommendSpecBox>
            <RecommendSpecBox>자격증</RecommendSpecBox>
          </RecommendSpecBoxContainer>
          <FeedbackButton to="/feedback">
            피드백 실천후기 작성하기
          </FeedbackButton>
        </OpinionBox>
      </OpinionContainer>
      <AddBox>더보기</AddBox>
    </>
  );
};

export default SpecOpinion;
