import styled from "styled-components";
import Banner from "../../components/Banner";
import drop from "../../img/dropdown_1.png";
import Card from "../../components/Card";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledP = styled.p`
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 1.2vw;
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
  height: 1.8vw;
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
  font-family: "Pretendard Variable";
  font-size: 1.2vw;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

function BalanceMain() {
  return (
    <>
      <Banner />
      <Container style={{ marginTop: "1.8vw" }}>
        <StyledP>취업을 원하는 직무를 선택해주세요.</StyledP>
      </Container>
      <Container>
        <DropDownContainer>
          <DropDown>
            전체 <img src={drop} style={{ width: "1.2vw", height: "0.87vw" }} />
          </DropDown>
          <StyledP>직무를 선택해주세요.</StyledP>
        </DropDownContainer>
      </Container>
      <Container>
        <StyledP>당신은 어떻게 생각하나요? 투표해주세요.</StyledP>
      </Container>
      <Container>
        <Card />
      </Container>
    </>
  );
}

export default BalanceMain;
