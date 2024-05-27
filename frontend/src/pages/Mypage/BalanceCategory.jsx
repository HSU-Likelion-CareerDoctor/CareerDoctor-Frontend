import React, { useState } from "react";
import styled from "styled-components";
import likeIcon from '../../img/like.png';
import saveIcon from '../../img/save.png';
import MyVote from './MyVote';

const SelectionCategoryContainer = styled.div`
  display: flex;
  width: 80%;
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

// 내가 올린 투표
const BalanceBoxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1vw;
  margin-top: 2vw;
  width: 70%;
`;

const BalanceBox = styled.div`
  border: 1px solid #ccc;
  padding: 2vw;
  box-shadow: 0 0.2vw 0.3vw rgba(0, 0, 0, 0.1);
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: row;
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

const ActionButton = styled.button`
  background-color: #f0f0f0;
  border: none;
  cursor: pointer;
  padding: 0.5vw;
  font-size: 0.9vw;
  margin-left: 0.5vw;
  transition: background-color 0.3s;

  &:hover {
    background-color: #007bff;
    color: #ffffff;
  }
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


const BalanceCategory = () => {
  const [showMyVotes, setShowMyVotes] = useState(false);
  const [showMyParticipationVotes, setShowMyParticipationVotes] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [saveCount, setSaveCount] = useState(0);
  const [displayedVotes, setDisplayedVotes] = useState(6); // 초기 표시 항목 수 6으로 설정

  const handleMyVoteClick = () => {
    setShowMyVotes(true);
    setShowMyParticipationVotes(false);
    setDisplayedVotes(6); // 항목 수 초기화
  };

  const handleMyParticipationVoteClick = () => {
    setShowMyVotes(false);
    setShowMyParticipationVotes(true);
  };

  const handleLikeClick = () => {
    setLikeCount(likeCount + 1);
  };

  const handleSaveClick = () => {
    setSaveCount(saveCount + 1);
  };

  const handleAddMoreClick = () => {
    setDisplayedVotes(displayedVotes + 4); // 4개의 항목을 추가로 표시
  };

  return (
    <>
      <SelectionCategoryContainer>
        <Category onClick={handleMyVoteClick}>내가 올린 투표</Category>
        <Category onClick={handleMyParticipationVoteClick}>내가 참여한 투표</Category>
        <Category>좋아요</Category>
        <Category>스크랩</Category>
      </SelectionCategoryContainer>

      {showMyVotes && (
        <BalanceBoxContainer>
          {Array.from({ length: displayedVotes }).map((_, index) => (
            <BalanceBox key={index}>
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
                <VoteOption>
                  <VotePercentage>60%</VotePercentage>
                  <VoteLabel>A</VoteLabel>
                </VoteOption>
                <VoteOption>
                  <VotePercentage>40%</VotePercentage>
                  <VoteLabel>B</VoteLabel>
                </VoteOption>
              </Vote>
            </BalanceBox>
          ))}
        </BalanceBoxContainer>
      )}

      {showMyParticipationVotes && (
        <MyVote />
      )}
      
      {showMyVotes && (
        <AddBox onClick={handleAddMoreClick}>더보기</AddBox>
      )}
    </>
  );
};

export default BalanceCategory;
