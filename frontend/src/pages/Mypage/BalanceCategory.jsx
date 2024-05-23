//#마이페이지_취준밸런스_내가올린투표
// BalanceCategory.jsx

import React from "react";
import styled from "styled-components";

const SelectionCategoryContainer = styled.div`
  display: flex;
  width: 90%;
  max-width: 1200px;
`;

const Category = styled.button`
  display: flex;
  padding: 0.5vw 1.2vw;
  margin-top: 1vw;
  margin-right: 1vw;
  font-size: 0.9vw;
  font-weight: 600;
  border: none;
  cursor: pointer;
  color: #000000;
  background-color: #d9d9d9;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #007bff;
    color: #ffffff;
  }
`;

const BalanceCategory = ({ handleMyVoteClick }) => {
  return (
    <SelectionCategoryContainer>
      <Category onClick={handleMyVoteClick}>내가 올린 투표</Category>
      <Category>내가 참여한 투표</Category>
      <Category>좋아요</Category>
      <Category>스크랩</Category>
    </SelectionCategoryContainer>
  );
};

export default BalanceCategory;

