// Review.jsx
import React from "react";
import styled from "styled-components";

const ReviewsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 1.3vw;
  margin-top: 1vw;
`;

const ReviewCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 0.5vw;
  padding: 1vw;
  width: 30%;
  box-shadow: 0 0.2vw 0.3vw rgba(0, 0, 0, 0.1);
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 0.5vw;
`;

const Avatar = styled.div`
  width: 2.5vw;
  height: 2.5vw;
  border-radius: 50%;
  background-color: #ddd;
  margin-right: 0.5vw;
`;

const UserName = styled.div`
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 0.8vw;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const UserJob = styled.div`
  color: #666;
  margin-left: 10vw;
  color: #000;
  text-align: right;
  font-family: "Pretendard Variable";
  font-size: 0.7vw;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const ReviewBox = styled.p`
  margin: 0.5vw 0;
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 0.8vw;
  font-style: normal;
  font-weight: 500;
  line-height: 175%; /* 28px */
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5vw;
`;

const Button = styled.button`
  padding: 0.5vw;
  border: 0.05vw solid #ccc;
  border-radius: 0.25vw;
  background-color: #fff;
  color: #000;
  cursor: pointer;
  font-family: "Pretendard Variable";
  font-size: 0.7vw;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const reviews = [
  {
    name: "닉 네임",
    job: "직무",
    review:
      "00님 소견서대로 00동아리 활동하기 위해서 면접 열심히 준비했었어요! 그리고 활동하면서 스펙많이 쌓아서 관련 업계에 1단계 합격했습니다! 진짜 커리,,",
  },
  {
    name: "닉 네임",
    job: "직무",
    review:
      "00님 소견서대로 00동아리 활동하기 위해서 면접 열심히 준비했었어요! 그리고 활동하면서 스펙많이 쌓아서 관련 업계에 1단계 합격했습니다! 진짜 커리,,",
  },
  {
    name: "닉 네임",
    job: "직무",
    review:
      "00님 소견서대로 00동아리 활동하기 위해서 면접 열심히 준비했었어요! 그리고 활동하면서 스펙많이 쌓아서 관련 업계에 1단계 합격했습니다! 진짜 커리,,",
  },
];

function Review({ name, job, review }) {
  return (
    <ReviewCard>
      <UserInfo>
        <Avatar />
        <UserName>{name}</UserName>
        <UserJob>{job}</UserJob>
      </UserInfo>
      <ReviewBox>{review}</ReviewBox>
      <ButtonContainer>
        <Button>친절하고 자세하게 설명해주세요.</Button>
        <Button>다른 사람에게도 추천해요.</Button>
      </ButtonContainer>
    </ReviewCard>
  );
}

function Reviews() {
  return (
    <ReviewsContainer>
      {reviews.map((review, index) => (
        <Review key={index} {...review} />
      ))}
    </ReviewsContainer>
  );
}

export default Reviews;
