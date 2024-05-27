import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";

const Section = styled.div`
  display: flex;
  color: #000;
  font-family: "PretendardVariable";
  font-size: 1.7vw;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 6vw;
  justify-content: center;
`;

const Container = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.div`
  color: #000;
  font-family: "PretendardVariable";
  font-size: 1.7vw;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Gif = styled.div`
  width: 14vw;
  height: 14vw;
  flex-shrink: 0;
  border-radius: 14vw;
  background: #d9d9d9;
  margin-top: 1.75vw;
`;

const Text = styled.div`
  color: #000;
  text-align: center;
  font-family: "PretendardVariable";
  font-size: 1.2vw;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 36px */
  margin-top: 2.1vw;
`;
const ButtonContainer = styled.div`
  display: flex;
  margin-top: 4.85vw;
`;

const Button1 = styled.div`
  display: flex;
  width: 10vw;
  padding: 1.6vw 4.8vw;
  justify-content: center;
  align-items: center;
  gap: 0.4vw;
  border-radius: 0.4vw;
  background: #ebebeb;
  color: #000;
  text-align: center;
  font-family: "PretendardVariable";
  font-size: 1.2vw;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 36px */
  margin-right: 2vw;
`;
const Button2 = styled.div`
  display: flex;
  width: 10vw;
  padding: 1.6vw 4.8vw;
  justify-content: center;
  align-items: center;
  gap: 0.4vw;
  border-radius: 0.4vw;
  background: var(--point-box, #558dfa);
  color: #fff;
  text-align: center;
  font-family: "PretendardVariable";
  font-size: 1.2vw;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 36px */
`;

function VoteRegister() {
  const navigate = useNavigate();
  const moveMyPage = () => navigate("/#");
  const moveOther = () => navigate("/balanceMain");
  return (
    <>
      <Header />
      <Section>
        <Container>
          <Title>투표 등록 완료!</Title>
          <Gif></Gif>
          <Text>
            투표 등록이 완료되었어요! <br />
            취준생 친구들의 의견을 기다려봐요!
          </Text>
          <ButtonContainer>
            <Button1 onClick={moveMyPage}>마이페이지 이동</Button1>
            <Button2 onClick={moveOther}>다른 고민들 보러가기</Button2>
          </ButtonContainer>
        </Container>
      </Section>
    </>
  );
}

export default VoteRegister;
