import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Card from "./Card";
import { useEffect } from "react";
import Config from "../config/config";

const CardListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 60vw;
`;

const LoadMoreButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const LoadMoreButton = styled.button`
  padding: 1.1vw 4vw;
  margin-top: 1vw;
  background-color: #ebebeb;
  color: black;
  border: none;
  border-radius: 0.4vw;
  font-size: 1vw;
  cursor: pointer;
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 1vw;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  &:hover {
    background-color: #ebebeb;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

function CardList({ initialNumCards, incrementNumCards }) {
  const [numCards, setNumCards] = useState(initialNumCards);
  const [data, setData] = useState([]);

  const location = useLocation(); // 현재 url

  const handleLoadMore = () => {
    setNumCards((prevNumCards) => prevNumCards + incrementNumCards);
  };

  // 조건부 url 일때 버튼 보임
  const shouldShowLoadMoreButton = location.pathname !== "/";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${Config.baseURL}/api/careerdoctor/posts`,
          {
            method: "GET",
            headers: Config.headers,
          }
        );

        const data = await response.json();
        console.log(data);

        if (response.status === 201) {
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
    <div>
      <Container>
        <CardListContainer>
          {data.length != 0 &&
            data.data
              .slice(0, numCards)
              .map((item, index) => <Card key={index} item={item} />)}
          {/* 컴포넌트 랜더링 후 이펙트가 발생하기 때문에 data.length !=0로 판단 */}
        </CardListContainer>
      </Container>
      {shouldShowLoadMoreButton && (
        <LoadMoreButtonContainer>
          <LoadMoreButton onClick={handleLoadMore}>더보기</LoadMoreButton>
        </LoadMoreButtonContainer>
      )}
    </div>
  );
}

export default CardList;
