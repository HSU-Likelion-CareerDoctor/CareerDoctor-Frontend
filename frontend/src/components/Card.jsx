import React from "react";
import styled from "styled-components";
import heart from "../img/Component4.png";
import save from "../img/Component3.png";

const CardContainer = styled.div`
  width: 20vw;
  padding: 0.8vw;
  border: 0.05vw solid #e0e0e0;
  border-radius: 0.4vw;
  background-color: #ffffff;
  font-family: "Pretendard", sans-serif;
  box-sizing: border-box;
  flex: 1 1 calc(50% - 1vw); /* 두 개의 카드가 한 줄에 들어가도록 크기 조정 */
  max-width: calc(50% - 1vw);
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
  margin-bottom: 0.6vw;
`;

const ActionRow2 = styled.div`
  display: flex;
  gap: 0.4vw;
`;

const LikesAndComments = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.7vw;
  color: #888888;
`;

const VoteSection = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.8vw;
`;

const VoteOption = styled.div`
  width: 13.3vw;
  height: 4vw;
  padding: 0.4vw;
  border: 0.1vw solid #558dfa;
  border-radius: 0.4vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f8ff;
  font-weight: bold;
  color: #558dfa;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SmallText = styled.span`
  color: #000;
  font-family: "PretendardVariable";
  font-size: 0.7vw;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const BigText = styled.span`
  color: #000;
  font-family: "PretendardVariable";
  font-size: 1.2vw;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

function Card({ index }) {
  return (
    <CardContainer>
      <Header>
        <Profile>
          <ProfileImage />
          <Username>닉네ㅇㅇㅇㅇㅇㅇㅇ님</Username>
        </Profile>
        <TimeAgo>365일 전</TimeAgo>
      </Header>
      <ActionRow>
        <Title>
          제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목
          제목 제목 제목 제목 제목 제목 제목 제목 제목 제목
        </Title>
        <ActionRow2>
          <LikesAndComments>
            <div>
              <img
                src={heart}
                style={{ width: "1.6vw", height: "1.6vw" }}
              ></img>
            </div>
            <div>10</div>
          </LikesAndComments>
          <img src={save} style={{ width: "1.6vw", height: "1.6vw" }}></img>
        </ActionRow2>
      </ActionRow>
      <Content>
        어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구
        어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구
        어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구
        어쩌구 저쩌구
      </Content>
      <VoteSection>
        <VoteOption>
          <TextContainer>
            <BigText>60%</BigText>
            <SmallText>A</SmallText>
          </TextContainer>
        </VoteOption>
        <VoteOption>
          <TextContainer>
            <BigText>60%</BigText>
            <SmallText>A</SmallText>
          </TextContainer>
        </VoteOption>
      </VoteSection>
    </CardContainer>
  );
}

export default Card;
