// MyVote.jsx
import React from "react";
import styled from "styled-components";

const MyVoteContainer = styled.div`
  width: 60%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, auto);
  gap: 2vw;
  margin-top: 2vw;
`;

const MyVoteBox = styled.div`
  border: 1px solid #ccc;
  padding: 2vw;
  box-shadow: 0 0.2vw 0.3vw rgba(0, 0, 0, 0.1);
`;

const MyVote = () => {
    return <>
        <MyVoteContainer>
            <MyVoteBox></MyVoteBox>
        </MyVoteContainer>
    </>
};

export default MyVote;
