import styled from "styled-components";
import Banner from "../../components/Banner";
import CardList from "../../components/CardList";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledP = styled.p`
  color: #000;
  font-family: "PretendardVariable";
  font-size: 1.2vw;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: 60%;
  margin-top: 4vw;
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

function BalanceMain() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <Banner
        text1="무슨 활동을 선택 해야할 지 고민이신가요?"
        text2="지금 바로"
        text3="선배들에게 물어보세요!"
        text4="투표 올리기"
        move = {() => {navigate("/createVote")}}
      />

      <Container>
        <StyledP>당신은 어떻게 생각하나요? 투표해주세요.</StyledP>
      </Container>
      <Container>
        <CardList initialNumCards={4} incrementNumCards={4} />
      </Container>
      <Footer />
    </>
  );
}

export default BalanceMain;
