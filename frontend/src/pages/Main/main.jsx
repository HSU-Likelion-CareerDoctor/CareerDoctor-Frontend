// Main.jsx
import React from "react";
import Banner from "../../components/Banner";
import styled from "styled-components";
import Reviews from "../../components/Review"; // Review 컴포넌트 가져오기
import CardList from "../../components/CardList";
import drop from "../../img/dropdown_1.png";

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
  justify-content: center;
  flex-direction: column;
  width: 60%;
`;
const Container4 = styled.div`
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

const DropDownContainer = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 60%;
  align-items: center;
`;

const DropDown = styled.div`
  display: inline-flex;
  height: 0.8vw;
  padding: 1.45vw 3.2vw;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.4vw;
  flex-shrink: 0;
  border-radius: 0.3vw;
  background: #eee;
  color: #000;
  text-align: center;
  font-family: "PretendardVariable";
  font-size: 1.2vw;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Text = styled.span`
  color: #000;
  font-family: "PretendardVariable";
  font-size: 1vw;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Container5 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function Main() {
  return (
    <>
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
        </Section>
      </Container>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Container3 style={{ marginTop: "1.8vw" }}>
          <StyledP>취준생들의 스펙 고민을 듣고 투표해주세요!</StyledP>
          <Text>취업을 원하는 직무를 선택해주세요.</Text>
        </Container3>
      </div>
      <Container2>
        <DropDownContainer>
          <DropDown>
            전체 <img src={drop} style={{ width: "1.2vw", height: "0.87vw" }} />
          </DropDown>
        </DropDownContainer>
      </Container2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Container4>
          <StyledP>요즘 취준생들의 고민들, 취준밸런스</StyledP>
          <Text> 더보기</Text>
        </Container4>
      </div>
      <Container2>
        <CardList numCards={5} />
      </Container2>
    </>
  );
}

export default Main;
