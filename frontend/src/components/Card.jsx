import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 20vw;
  padding: 0.8vw;
  border: 0.05vw solid #e0e0e0;
  border-radius: 0.4vw;
  background-color: #ffffff;
  font-family: "Pretendard", sans-serif;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.8vw;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileImage = styled.div`
  width: 2vw;
  height: 2vw;
  border-radius: 50%;
  background-color: #d8d8d8;
  margin-right: 0.4vw;
`;

const Username = styled.div`
  font-weight: bold;
  font-size: 0.7vw;
`;

const TimeAgo = styled.div`
  font-size: 0.6vw;
  color: #888888;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 0.8vw;
  margin-bottom: 0.4vw;
  width: 70%;
`;

const Content = styled.div`
  font-size: 0.7vw;
  color: #333333;
  margin-bottom: 0.6vw;
`;

const ActionRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.6vw;
`;

const LikesAndComments = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.7vw;
  color: #888888;
`;

const VoteSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

const VoteOption = styled.div`
  width: 48%;
  padding: 0.8vw;
  text-align: center;
  border: 0.1vw solid #558dfa;
  border-radius: 8px;
  background-color: #f0f8ff;
  font-weight: bold;
  color: #558dfa;
`;

function Card() {
  return (
    <CardContainer>
      <Header>
        <Profile>
          <ProfileImage />
          <Username>닉네ㅇㅇㅇㅇㅇㅇㅇ님</Username>
        </Profile>
        <TimeAgo>365일 전</TimeAgo>
      </Header>
      <Title>제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목</Title>
      <Content>
        어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구
        어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구
        어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구
        어쩌구 저쩌구
      </Content>
      <ActionRow>
        <LikesAndComments>
          <div>10</div>
          <div>💗</div>
        </LikesAndComments>
        <div>📑</div>
      </ActionRow>
      <VoteSection>
        <VoteOption>
          60%
          <br />A
        </VoteOption>
        <VoteOption>
          40%
          <br />B
        </VoteOption>
      </VoteSection>
    </CardContainer>
  );
}

export default Card;
