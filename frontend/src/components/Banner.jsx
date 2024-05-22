import styled from "styled-components";
import logo1 from "../img/logo1.png";
import { useNavigate } from "react-router-dom";

const Background = styled.div`
  width: 100%;
  height: 22.1vw;
  flex-shrink: 0;
  background: #d8e5ef;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.4vw;
`;

const BannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  align-items: center;
`;

const TitleTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.4vw;
`;

const SmallText = styled.span`
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 1vw;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const BigText = styled.span`
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 2vw;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 60px */
`;

const VoteButton = styled.div`
  display: flex;
  width: 10vw;
  height: 1.8vw;
  padding: 1.2vw 4.6vw;
  justify-content: center;
  align-items: center;
  gap: 0.4vw;
  border-radius: 1.2vw;
  background: var(--point-box, #558dfa);
  color: #fff;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 1.2vw;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const ImgContainer = styled.div`
  width: 14.6vw;
  height: 1.25vw;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
`;

function Banner() {
  const navigate = useNavigate();
  const moveCreateVote = () => {
    navigate("/createVote");
  };
  return (
    <>
      <Background>
        <BannerContainer>
          <TitleContainer>
            <TitleTextContainer>
              <SmallText>무슨 활동을 선택 해야할 지 고민이신가요?</SmallText>
              <BigText>지금 바로</BigText>
              <BigText>선배들에게 물어보세요!</BigText>
            </TitleTextContainer>
            <VoteButton onClick={moveCreateVote}>투표 올리기</VoteButton>
          </TitleContainer>
          <img src={logo1} style={{ width: "14.6vw", height: "11.6vw" }}></img>
        </BannerContainer>
      </Background>
    </>
  );
}

export default Banner;
