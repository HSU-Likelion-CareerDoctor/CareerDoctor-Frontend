import React, { useState } from "react";
import styled from "styled-components";
import heart from "../img/Component4.png";
import save from "../img/Component3.png";
import Config from "../config/config";
import { useNavigate } from "react-router-dom";

const CardContainer = styled.div`
  width: 49%;
  padding: 0.8vw;
  border: 0.05vw solid #e0e0e0;
  border-radius: 0.4vw;
  background-color: #ffffff;
  font-family: "Pretendard Variable";
  box-sizing: border-box;
  margin-bottom: 1vw;
  box-shadow: 0vw 0vw 0.5vw 0vw rgba(0, 0, 0, 0.35);
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
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 0.8vw;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const TimeAgo = styled.div`
  color: #000;
  text-align: right;
  font-family: "Pretendard Variable";
  font-size: 0.8vw;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const Title = styled.div`
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 1vw;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 30px */
  margin-right: 3vw;
`;

const Content = styled.div`
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 0.7vw;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 21px */
  margin-bottom: 1.7vw;
`;

const ActionRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.6vw;
  cursor: pointer;
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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-right: 1vw;
  gap: 1vw 1.8vw;
`;

const VoteOption = styled.div`
  width: 100%;
  height: 4vw;
  padding: 0.4vw;
  border: ${({ clicked }) => (clicked ? "0.1vw solid #558DFA;" : "none")};
  border-radius: 0.4vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ clicked }) => (clicked ? "#C0E5FF" : "#ebebeb")};
  font-weight: bold;
  color: ${({ clicked }) => (clicked ? "#000000" : "#000000")};
  cursor: pointer;

  &:hover {
    border: 0.1vw solid #558dfa;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SmallText = styled.span`
  color: inherit;
  font-family: "PretendardVariable";
  font-size: 0.7vw;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const BigText = styled.span`
  color: inherit;
  font-family: "PretendardVariable";
  font-size: 1.2vw;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Count = styled.div`
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 0.6vw;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

function calculateTimeAgo(inputTime) {
  const now = new Date();
  const past = new Date(inputTime);

  const diffInMs = now - past;

  if (diffInMs < 1000 * 60 * 60 * 24) {
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
    return `${diffInHours}시간 전`;
  } else {
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    return `${diffInDays}일 전`;
  }
}

function Card({ item }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const timeAgo = calculateTimeAgo(item.createdAt);
  const navigate = useNavigate();
  const initialCount = item.vote.reduce(
    (total, vote) => total + vote.voteCount,
    0
  );

  const [count, setCount] = useState(initialCount);

  const handleVoteClick = (index) => {
    setSelectedOption(index);
  };

  const moveDetail = () => {
    navigate(`/voteDetail/${item.postId}`);
  };

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${Config.baseURL}/api/careerdoctor/plusVoteCount/${item.voteId}`,
        {
          method: "GET",
          headers: Config.headers,
        }
      );

      const data = await response.json();
      console.log(data);

      if (response.status === 200) {
        setCount(count + 1);
      } else {
        alert("데이터를 불러오는데 실패했습니다.");
      }
    } catch (error) {
      alert("에러 발생");
      console.log(error);
    }
  };

  return (
    <CardContainer>
      <Header>
        <Profile>
          <ProfileImage />
          <Username>{item.userId}</Username>
        </Profile>
        <TimeAgo>{timeAgo}</TimeAgo>
      </Header>
      <ActionRow onClick={moveDetail}>
        <Title>{item.postTitle}</Title>
        <ActionRow2>
          <LikesAndComments>
            <div>
              <img
                src={heart}
                style={{ width: "1.2vw", height: "1.2vw" }}
              ></img>
            </div>
            <Count>{item.likeCount}</Count>
          </LikesAndComments>
          <LikesAndComments>
            <div>
              <img src={save} style={{ width: "1.2vw", height: "1.2vw" }}></img>
            </div>
            <Count>{item.scrapCount}</Count>
          </LikesAndComments>
        </ActionRow2>
      </ActionRow>
      <Content>{item.postContent}</Content>
      <VoteSection>
        {item.vote.map((vote, index) => (
          <VoteOption
            key={index}
            clicked={selectedOption === index}
            onClick={() => handleVoteClick(index)}
          >
            <TextContainer>
              <BigText>{vote.percent}%</BigText>
              <SmallText>{vote.voteContent}</SmallText>
            </TextContainer>
          </VoteOption>
        ))}
      </VoteSection>
    </CardContainer>
  );
}

export default Card;
