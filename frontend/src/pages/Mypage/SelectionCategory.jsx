// SelectionCategory.jsx 선택 스펙진단서vs스펙처방전
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

const SelectionCategory = ({ handlePrescriptionButtonClick }) => {
  return (
    <SelectionCategoryContainer>
      <Category>스펙진단서</Category>
      <Category onClick={handlePrescriptionButtonClick}>스펙처방전</Category>
    </SelectionCategoryContainer>
  );
};

export default SelectionCategory;
