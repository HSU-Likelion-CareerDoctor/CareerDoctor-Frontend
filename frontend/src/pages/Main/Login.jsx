import React, { useState } from "react";
import styled from "styled-components";
import LogoIcon from "../../img/logo3.png";
import Config from "../../config/config";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  width: 13%;
  height: auto;
  margin-top: 2vw;
  margin-bottom: 2vw;
`;

const Title = styled.div`
  font-size: 1.5vw;
  font-weight: bold;
  margin-top: 2vw;
  margin-bottom: 2vw;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 100%;
  padding: 1vw;
  padding-right: 10vw;
  margin-bottom: 0.7vw;
  border: 0.1vw solid #b6b6b6;
  border-radius: 1vw;
  box-sizing: border-box;
  border-color: ${(props) => (props.active ? "#558DFA" : "#B6B6B6")};

  &:focus {
    border-color: #558dfa;
    border: 0.15vw solid #558dfa;
    outline: none;
  }
`;

const Label = styled.label`
  font-size: 1vw;
  font-weight: bold;
  margin-top: 1vw;
  margin-bottom: 1vw;
  color: #000000;
`;

const Note = styled.span`
  font-size: 0.8vw;
  color: #535353;
  margin-bottom: 1.5vw;
  margin-left: 1vw;
  text-align: start;
`;

const Button = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2vw;
`;

const SignupButton = styled.button`
  font-weight: bold;
  width: 220px;
  padding: 1vw;
  margin: 0.5vw 0;
  border: none;
  border-radius: 1vw;
  background-color: ${(props) => (props.active ? "#558DFA" : "#EBEBEB")};
  font-size: 1vw;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const LoginButton = styled.button`
  font-weight: bold;
  color: #fff;
  width: 220px;
  padding: 1vw;
  margin: 0.5vw 0;
  border: none;
  border-radius: 1vw;
  background-color: #9bbdff;
  font-size: 1vw;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Error = styled.div`
  font-size: 0.8vw;
  font-weight: bold;
  text-align: center;
  color: red;
  margin-top: -2vw;
  margin-bottom: 2vw;
`;

const Message = styled.p`
  color: ${(props) => (props.isValid ? "green" : "red")};
  margin-bottom: 1vw;
`;

const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [isUsernameValid, setIsUsernameValid] = useState(null);
  const [isLoginActive, setIsLoginActive] = useState(false);

  const handleUsernameChange = (e) => {
    setUserId(e.target.value);
    setIsUsernameValid(null);
    setIsLoginActive(e.target.value !== "" && password !== "");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setIsLoginActive(e.target.value !== "" && userId !== "");
  };

  const checkUsername = () => {
    const existingUsernames = ["user1", "user2", "user3"];
    if (existingUsernames.includes(userId)) {
      setIsUsernameValid(false);
    } else {
      setIsUsernameValid(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 로그인 완료 후 메인 페이지로 이동하는 로직을 추가
  };

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch(
        `${Config.baseURL}/api/careerdoctor/signin`,
        {
          method: "POST",
          headers: Config.headers,
          body: JSON.stringify({
            userId: userId,
            password: password,
          }),
        }
      );

      const data = await response.json();
      console.log(data);

      if (response.status === 200) {
        alert("로그인에 성공하였습니다.");
        localStorage.setItem("isLogined", true);
        localStorage.setItem("userId", userId);
        navigate("/");
      } else {
        alert("로그인 실패");
      }
    } catch (error) {
      alert("에러 발생");
      console.log(error);
    }
  };

  return (
    <Container>
      <Logo src={LogoIcon} alt="LogoIcon" />
      <Title>
        커리어닥터에서 <br />
        당신의 스펙을 진단받아보세요.
      </Title>
      <Form onSubmit={handleSubmit}>
        <Label active={userId !== ""}>아이디</Label>
        <Input
          type="text"
          placeholder="아이디를 입력해주세요."
          value={userId}
          onChange={handleUsernameChange}
          active={userId !== ""}
        />
        <Note>아이디 찾기</Note>
        <Label active={password !== ""}>비밀번호</Label>
        <Input
          type="password"
          placeholder="비밀번호를 입력해주세요."
          value={password}
          onChange={handlePasswordChange}
          active={password !== ""}
        />
        <Note>비밀번호 찾기</Note>
        <Button>
          <Error>아이디와 비밀번호를 다시 한번 입력해주세요.</Error>
          <LoginButton type="button" onClick={handleLogin}>
            로그인
          </LoginButton>
          <SignupButton type="submit" active={isLoginActive}>
            회원가입
          </SignupButton>
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
