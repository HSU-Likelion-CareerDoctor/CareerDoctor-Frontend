// Review.jsx
import React from "react";
import styled from "styled-components";
import Config from "../config/config";
import { useState } from "react";
import { useEffect } from "react";

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
  box-shadow: 0vw 0vw 0.5vw 0vw rgba(0, 0, 0, 0.35);
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

function Review({ item }) {
  return (
    <ReviewCard>
      <UserInfo>
        <Avatar />
        <UserName>{item.userId}</UserName>
      </UserInfo>
      <ReviewBox>{item.reviewContent}</ReviewBox>
      <ButtonContainer>
        <Button>{item.opinion}</Button>
        <Button>{item.bestPoint}</Button>
      </ButtonContainer>
    </ReviewCard>
  );
}

function Reviews() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${Config.baseURL}/api/careerdoctor/reviews`,
          {
            method: "GET",
            headers: Config.headers,
          }
        );

        const data = await response.json();
        console.log(data);

        if (response.status === 200) {
          setData(data);
        } else {
          alert("데이터를 불러오는데 실패했습니다.");
        }
      } catch (error) {
        alert("에러 발생");
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <ReviewsContainer>
      {data.length != 0 &&
        data.data.map((item, index) => <Review key={index} item={item} />)}
    </ReviewsContainer>
  );
}

export default Reviews;
