import React, { useState } from "react";
import styled from "styled-components";
import Card from "./Card";

const CardListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 60%;
  justify-content: space-between;
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

  const handleLoadMore = () => {
    setNumCards((prevNumCards) => prevNumCards + incrementNumCards);
  };

  return (
    <div>
      <Container>
        <CardListContainer>
          {Array.from({ length: numCards }).map((_, index) => (
            <Card key={index} index={index} />
          ))}
        </CardListContainer>
      </Container>
      <LoadMoreButtonContainer>
        <LoadMoreButton onClick={handleLoadMore}>더보기</LoadMoreButton>
      </LoadMoreButtonContainer>
    </div>
  );
}

export default CardList;
