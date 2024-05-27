import React from "react";
import { useState } from "react";
import Banner from "../../components/Banner";
import styled from "styled-components";
import Reviews from "../../components/Review"; // Review 컴포넌트 가져오기
import CardList from "../../components/CardList";
import review from "../../img/review.png";
import emptyCircle from "../../img/emptyCircle.png";
import fillCircle from "../../img/fillCircle.png";
import right from "../../img/right.png";
import left from "../../img/left.png";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const SmallText = styled.span`
  color: #000;
  font-family: "PretendardVariable";
  font-size: 1vw;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const BigText = styled.span`
  color: #000;
  font-family: "PretendardVariable";
  font-size: 1.6vw;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 60px */
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const Section = styled.div`
  width: 60%;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4vw;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5.2vw;
  margin-bottom: 1.6vw;
`;

const SpecButton = styled.div`
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
  font-family: "PretendardVariable";
  font-size: 1.2vw;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Container2 = styled.div`
  display: flex;
  justify-content: center;
`;
const Container3 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5.2vw;
  width: 60%;
`;
const StyledP = styled.p`
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 1.6vw;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: 60%;
`;

const Text = styled.span`
  color: #000;
  font-family: "PretendardVariable";
  font-size: 1vw;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const NextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8vw;
  margin-top: 0.9vw;
`;

function Main() {
  const [count, setCount] = useState(0);

  const showPrevious = () => {
    setCount((prevCount) => (prevCount - 1 + 4) % 4);
  };

  const showNext = () => {
    setCount((prevCount) => (prevCount + 1) % 4);
  };

  const renderCircles = () => {
    return Array.from({ length: 4 }).map((_, index) => {
      return (
        <img
          key={index}
          src={index === count ? fillCircle : emptyCircle}
          alt={`circle-${index}`}
        />
      );
    });
  };

  return (
    <>
      <Header />
      <Banner
        text1="자꾸 떨어지는 이유가 궁금하신가요?"
        text2="지금 바로"
        text3="스펙을 진단 받아보세요!"
        text4="지금 바로 진단받기"
      />
      <Container>
        <Section>
          <TitleContainer>
            <TextContainer>
              <SmallText>취뽀 선배님들에게 피드백을 들어보세요.</SmallText>
              <BigText>스펙만렙과 취뽀 선배에게 받는 스펙소견서</BigText>
            </TextContainer>
            <SpecButton>지금 스펙소견서 받기</SpecButton>
          </TitleContainer>
          <span
            style={{
              fontSize: "0.9vw",
              fontWeight: "600",
              fontStyle: "normal",
            }}
          >
            후기 인증
          </span>
          <Reviews /> {/* Review 컴포넌트 추가 */}
          <NextContainer>
            <img
              src={left}
              style={{ cursor: "pointer" }}
              onClick={showPrevious}
              alt="left arrow"
            />
            {renderCircles()}
            <img
              src={right}
              style={{ cursor: "pointer" }}
              onClick={showNext}
              alt="right arrow"
            />
          </NextContainer>
          <img
            src={review}
            style={{
              width: "100%",
              height: "6vw",
              marginTop: "1.3vw",
              borderRadius: "0.4vw",
              boxShadow: "0vw 0vw 0.5vw 0vw rgba(0, 0, 0, 0.25)",
            }}
            alt="review"
          />
        </Section>
      </Container>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Container3>
          <StyledP>취준생들의 스펙 고민을 듣고 투표해주세요!</StyledP>
          <Text> 더보기</Text>
        </Container3>
      </div>
      <Container2>
        <CardList initialNumCards={4} />
      </Container2>
      <Footer />
    </>
  );
}

export default Main;
