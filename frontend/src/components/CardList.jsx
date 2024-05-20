import styled from "styled-components";
import React from "react";
import Card from "./Card";

const CardListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 60%;
`;
function CardList({ numCards }) {
  return (
    <CardListContainer>
      {Array.from({ length: numCards }).map((_, index) => (
        <Card key={index} index={index} />
      ))}
    </CardListContainer>
  );
}

export default CardList;
