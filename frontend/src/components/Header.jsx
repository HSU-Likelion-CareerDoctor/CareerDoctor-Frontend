import React from "react";
import logo4 from "../img/logo4.png";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Logo = styled.div`
  display: inline-flex;
  height: 4.5vw;
  padding: 1vw 0vw;
  align-items: center;
  gap: 0.15vw;
  flex-shrink: 0;
`;

const Login = styled.div`
  display: flex;
`;

const Container1 = styled.div`
  display: flex;
  justify-content: center;
  height: 4.5vw;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
`;

const Navigation = styled.div`
  display: flex;
  gap: 2vw;
`;

const Text = styled.div`
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 0.8vw;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

function Header() {
  const navigate = useNavigate();

  const moveBalance = () => {
    navigate("/balanceMain");
  };
  const moveLogin = () => {
    navigate("/login");
  };
  const moveSignup = () => {
    navigate("/signup");
  };
  return (
    <>
      <Container1>
        <Container>
          <Logo>
            <img style={{ width: "9vw", height: "4.5vw" }} src={logo4} />
          </Logo>
          <Navigation>
            <Text>스펙 진단받기</Text>
            <Text>스펙소견서</Text>
            <Text>취준 밸런스</Text>
            <Text onClick={moveBalance}>실시간 지원자 스펙</Text>
            <Login>
              <Text style={{ marginRight: "0.4vw" }} onClick={moveLogin}>
                로그인
              </Text>
              <Text onClick={moveSignup}>| 회원가입</Text>
            </Login>
          </Navigation>
        </Container>
      </Container1>
    </>
  );
}

export default Header;
