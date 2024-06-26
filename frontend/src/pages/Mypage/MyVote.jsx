import React, { useState } from 'react';
import styled from 'styled-components';
import likeIcon from "../../img/like.png";
import saveIcon from "../../img/save.png";

const MyVoteContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1vw;
  margin-top: 2vw;
  width: 60%;
`;

const VoteBox = styled.div`
  border: 1px solid #ccc;
  padding: 2vw;
  box-shadow: 0 0.2vw 0.3vw rgba(0, 0, 0, 0.1);
`;

const InfoBox = styled.div`
  display:flex;
  justify-content: space-between;
`;

const UserNameMetaBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1vw;
`;

const ProfileImage = styled.div`
  width: 3vw;
  height: 3vw;
  background-color: #ccc;
  border-radius: 50%;
  margin-right: 1vw;
`;

const UserName = styled.div`
  font-size: 1.2vw;
  font-weight: 700;
`;

const Date = styled.div`
  margin-bottom: 1vw;
  font-size: 0.8vw;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1vw;
`;

const Title = styled.div`
  font-size: 1vw;
  font-weight: bold;
`;

const LikeSave = styled.div`
  display: flex;
`;

const LikeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 0.5vw;
`;

const LikeButton = styled.button`
  background: url(${likeIcon}) no-repeat center center;
  background-size: contain;
  width: 1vw;
  height: 1vw;
  border: none;
  cursor: pointer;

  &:hover {
    filter: brightness(0.8);
  }
`;

const SaveContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 0.5vw;
`;

const SaveButton = styled.button`
  background: url(${saveIcon}) no-repeat center center;
  background-size: contain;
  width: 1vw;
  height: 1vw;
  border: none;
  cursor: pointer;

  &:hover {
    filter: brightness(0.8);
  }
`;

const CountText = styled.div`
  font-size: 0.8vw;
`;

const Content = styled.div`
  font-size: 1vw;
  margin-bottom: 1vw;
`;

const Vote = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1vw;
`;

const VoteOption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  padding: 1vw; 
  background-color: #C0E5FF;
  margin-right: 1vw;
  border: ${(props) => (props.isSelected ? '2px solid #558DFA' : 'none')};
  &:last-child {
    margin-right: 0;
  }
`;

const VotePercentage = styled.div`
  font-size: 1.2vw;
  font-weight: bold;
  margin-bottom: 0.5vw;
`;

const VoteLabel = styled.div`
  font-size: 1vw;
`;

const AddBox = styled.button`
  display: flex;
  justify-content: center;
  width: 10%;
  margin-top: 2vw;
  margin-bottom: 2vw;
  padding: 0.5vw 1vw;
  font-size: 0.9vw;
  font-weight: bold;
  border: none;
  background-color: #ebebeb;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #818181;
  }
`;

const MyVote = ({ likeCount, handleLikeClick, saveCount, handleSaveClick }) => {
  const initialSelectedOptions = Array(6).fill('A'); // 초기 선택 상태를 'A'로 설정
  const [selectedOptions, setSelectedOptions] = useState(initialSelectedOptions);
  const [displayedVotes, setDisplayedVotes] = useState(6);

  const handleOptionClick = (index, option) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[index] = option;
    setSelectedOptions(newSelectedOptions);
  };

  const handleAddMoreClick = () => {
    const newDisplayedVotes = displayedVotes + 4;
    setDisplayedVotes(newDisplayedVotes);
    const newSelectedOptions = [...selectedOptions, ...Array(4).fill('A')]; // 새로운 항목 추가 시 초기 선택 상태를 'A'로 설정
    setSelectedOptions(newSelectedOptions);
  };

  return (
    <MyVoteContainer>
      {Array.from({ length: displayedVotes }).map((_, index) => (
        <VoteBox key={index}>
          <InfoBox>
            <UserNameMetaBox>
              <ProfileImage />
              <UserName>닉네ㅇㅇㅇㅇ임</UserName>
            </UserNameMetaBox>
            <Date>2일전</Date>
          </InfoBox>
          <TitleContainer>
            <Title>제목입니다.</Title>
            <LikeSave>
              <LikeContainer>
                <LikeButton onClick={handleLikeClick} />
                <CountText>{likeCount}</CountText>
              </LikeContainer>
              <SaveContainer>
                <SaveButton onClick={handleSaveClick} />
                <CountText>{saveCount}</CountText>
              </SaveContainer>
            </LikeSave>
          </TitleContainer>
          <Content>내용입니다.</Content>
          <Vote>
            <VoteOption isSelected={selectedOptions[index] === 'A'} onClick={() => handleOptionClick(index, 'A')}>
              <VotePercentage>60%</VotePercentage>
              <VoteLabel>A</VoteLabel>
            </VoteOption>
            <VoteOption isSelected={selectedOptions[index] === 'B'} onClick={() => handleOptionClick(index, 'B')}>
              <VotePercentage>40%</VotePercentage>
              <VoteLabel>B</VoteLabel>
            </VoteOption>
          </Vote>
        </VoteBox>
      ))}
      {/* <AddBox onClick={handleAddMoreClick}>더보기</AddBox> */}
    </MyVoteContainer>
  );
};

export default MyVote;
