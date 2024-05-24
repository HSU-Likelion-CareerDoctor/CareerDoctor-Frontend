import React, { useState } from "react";
import styled from "styled-components";
import heart from "../../img/Component4.png";
import save from "../../img/Component3.png";
import comment from "../../img/comment.png";

// Styled-components 정의
const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 2vw;
`;

const Content = styled.div`
  width: 60%;
  background-color: #fff;
  padding: 2vw;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.div`
  width: 2.2vw;
  height: 2.2vw;
  border-radius: 50%;
  background-color: #ccc;
  margin-right: 1vw;
`;

const UserName = styled.div`
  color: #000;
  font-family: "PretendardVariable";
  font-size: 0.75vw;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 22.5px */
`;

const Meta = styled.div`
  color: #1dac67;
  display: flex;
  justify-content: center;
  font-family: "PretendardVariable";
  font-size: 0.75vw;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Title = styled.h2`
  margin-top: 1vw;
  font-size: 1vw;
  color: #000;
  font-family: "PretendardVariable";
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 30px */
`;

const PollOptions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1vw;
`;

const OptionButton = styled.button`
  width: 48%;
  padding: 1vw;
  font-size: 1vw;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
  background-color: #eee;
  border: 1px solid #eee;
  border-radius: 0.5vw;

  &:hover {
    background-color: #ddd;
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1vw;
`;

const InfoBox = styled.div`
  display: flex;
  gap: 0.8vw;
  align-items: center;
  justify-content: center;
`;

const ActionButton = styled.button`
  display: flex;
  flex-direction: column;
  margin-right: 1vw;
  background: none;
  border: none;
  cursor: pointer;
  color: #666;
  display: flex;
  align-items: center;

  &:hover {
    color: #000;
  }
`;

const CommentsSection = styled.div`
  margin-top: 2vw;
`;

const CommentInput = styled.textarea`
  width: 96%;
  height: 5vw;
  padding: 1vw;
  border-radius: 0.2vw;
  border: 0.05vw solid #cdcdcd;

  background: #f9f9fa;
  resize: none;
`;

const CommentButton = styled.button`
  display: flex;
  width: 6vw;
  height: 2.5vw;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 0.2vw;
  background: ${({ isClickable }) => (isClickable ? "#558DFA" : "#efefef")};
`;

const Time = styled.span`
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 0.65vw;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 19.5px */
`;

const Comment = styled.div`
  margin-top: 1vw;
  padding: 1vw;
  border-radius: 4px;
  background: #f9f9fa;
`;

const CommentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CommentContent = styled.div`
  margin-top: 0.5vw;
  color: var(--black-text, #191919);
  font-family: "Pretendard Variable";
  font-size: 0.8vw;
  font-style: normal;
  font-weight: 600;
  line-height: 175%; /* 28px */
`;

const Context = styled.div`
  color: #000;
  font-family: "PretendardVariable";
  font-size: 0.7vw;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */
  margin-top: 0.8vw;
`;

const CommentTitle = styled.div`
  color: #000;
  font-family: "PretendardVariable";
  font-size: 1.2vw;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 0.6vw;
`;

// 드롭다운 메뉴 스타일링
const MenuIcon = styled.div`
  cursor: pointer;
  position: relative;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 2vw;
  right: 0;
  width: 4vw;
  background: white;
  border: 0.05vw solid #ccc;
  box-shadow: 0 0.2vw 0.4vw rgba(0, 0, 0, 0.1);
  z-index: 1;
  color: #000;
  font-family: "PretendardVariable";
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.75vw;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 22.5px */
`;

const Count = styled.span`
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 0.6vw;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 0.2vw;
`;

const Submit = styled.span`
  color: ${({ isClickable }) => (isClickable ? "#fff" : "#aeaeae")};
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 1.2vw;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const DropdownItem = styled.div`
  padding: 0.5vw 1vw;
  cursor: pointer;
  border-bottom: 0.05vw solid #eee;

  &:hover {
    background-color: #f1f1f1;
  }

  &:last-child {
    border-bottom: none;
  }
`;

const ButtonSection = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 0.23vw;
  margin-top: 1.2vw;
`;

const PostHeader = ({ isAuthor }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <Header>
      <UserInfo>
        <Avatar />
        <InfoBox>
          <UserName>작성자 닉네임</UserName>
          <Meta>👍 스펙 양호</Meta> <Time>1분 전</Time>
        </InfoBox>
      </UserInfo>
      <MenuIcon onClick={toggleDropdown}>
        ⋮
        {isDropdownOpen && (
          <DropdownMenu>
            <DropdownItem>수정</DropdownItem>
            <DropdownItem>삭제</DropdownItem>
            {!isAuthor && <DropdownItem>신고</DropdownItem>}
          </DropdownMenu>
        )}
      </MenuIcon>
    </Header>
  );
};

const CommentComponent = ({ isAuthor }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <Comment>
      <CommentHeader>
        <UserInfo>
          <Avatar />
          <InfoBox>
            <UserName> 작성자 닉네임</UserName>
            <Meta>👍 스펙 양호 </Meta> <Time>1분 전</Time>
          </InfoBox>
        </UserInfo>
        <MenuIcon onClick={toggleDropdown}>
          ⋮
          {isDropdownOpen && (
            <DropdownMenu>
              <DropdownItem>수정</DropdownItem>
              <DropdownItem>삭제</DropdownItem>
              {!isAuthor && <DropdownItem>신고</DropdownItem>}
            </DropdownMenu>
          )}
        </MenuIcon>
      </CommentHeader>
      <CommentContent>
        댓글 댓글
        <br /> 내용 댓글 내용
      </CommentContent>
    </Comment>
  );
};

const VoteDetail = () => {
  const [isAuthor, setIsAuthor] = useState(true); // 작성자 여부 (예시로 true로 설정)
  const [comment, setComment] = useState("");
  const [isClickable, setIsClickable] = useState(false);

  const handleComment = (value) => {
    setComment(value);
    setIsClickable(value.trim().length > 0);
  };

  return (
    <Container>
      <Content>
        <PostHeader isAuthor={isAuthor} />
        <Title>
          A 공모전이랑 B 동아리랑 준비 기간이 겹쳐서 하나만 해야할 것 같은데
          어떤 것을 하는게 좋을까요?
        </Title>
        <Context>
          현재 동아리는 1회 공모전은 경험이 없어요. 어떤걸 선택하는것이
          좋을까요? <br />
          취준생 선배님들 도와주세요! 현재 동아리는 1회 공모전은 경험이 없어요.
          어떤 걸 선택하는 것이 좋을까요?
          <br /> 취준생 선배님들 도와주세요!
        </Context>
        <PollOptions>
          <OptionButton>A 공모전</OptionButton>
          <OptionButton>B 동아리</OptionButton>
        </PollOptions>
        <Actions>
          <ActionButton>
            <img src={heart} style={{ width: "1.6vw", height: "1.6vw" }} />
            <Count>10</Count>
          </ActionButton>
          <ActionButton>
            <img src={save} style={{ width: "1.6vw", height: "1.6vw" }} />
            <Count>3</Count>
          </ActionButton>
          <ActionButton>
            <img src={comment} style={{ width: "1.6vw", height: "1.6vw" }} />
            <Count>14</Count>
          </ActionButton>
        </Actions>
        <CommentsSection>
          <CommentTitle>댓글</CommentTitle>
          <CommentInput
            placeholder="투표의 배경이 되는 설명을 100자 이내로 작성해주세요."
            value={comment}
            onChange={(e) => handleComment(e.target.value)}
          />
          <ButtonSection>
            <CommentButton isClickable={isClickable}>
              <Submit isClickable={isClickable}>등록</Submit>
            </CommentButton>
          </ButtonSection>
          <CommentComponent isAuthor={isAuthor} />
          <CommentComponent isAuthor={isAuthor} />
        </CommentsSection>
      </Content>
    </Container>
  );
};

export default VoteDetail;
