import React, { useState } from "react";
import styled from "styled-components";
import LogoIcon from "../../img/logo3.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
    width: 13%;
    height: auto;
    margin-top:2vw;
    margin-bottom: 2vw;
`;

const Title = styled.div`
    font-size: 1.5vw;
    font-weight: bold;
    margin-top: 1vw;
    margin-bottom: 1vw;
    text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputGroup = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 1vw;
`;

const Input = styled.input`
  width: 100%;
  padding: 1vw;
  padding-right: 10vw;
  margin-bottom: 1vw;
  border: 1px solid #ccc;
  border-radius: 1vw;
  box-sizing: border-box;
`;

const Label = styled.label`
  font-size: 1vw;
  font-weight: bold;
  margin-top: 1vw;
  margin-bottom: 1vw;
`;

const Note = styled.span`
  font-size: 0.8vw;
  color: #999;
  margin-top: -0.5vw;
  margin-bottom: 1.5vw;
  text-align: start;
`;

const Button = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2vw;
`;
//중복확인버튼
const CheckButton = styled.button`
  position: absolute;
  right: 1vw;
  top: 38%;
  transform: translateY(-50%);
  padding: 0.5vw 1vw;
  border: none;
  border-radius: 0.5vw;
  background-color: #EBEBEB;
  font-size: 0.8vw;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const SignupButton = styled.button`
  width: 220px;
  padding: 1vw;
  margin: 0.5vw 0;
  border: none;
  border-radius: 1vw;
  background-color: #9BBDFF;
  color: white;
  font-size: 1vw;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const LoginButton = styled.button`
  width: 220px;
  padding: 1vw;
  margin: 0.5vw 0;
  border: none;
  border-radius: 1vw;
  background-color: #EBEBEB;
  font-size: 1vw;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;



const Message = styled.p`
  color: ${props => (props.isValid ? "green" : "red")};
  margin-bottom: 1vw;
`;

const Signup = () => {
  const [username, setUsername] = useState("");
  const [isUsernameValid, setIsUsernameValid] = useState(null);
  const [message, setMessage] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setIsUsernameValid(null);
    setMessage("");
  };

  const checkUsername = () => {
    // 여기서 실제 서버 API를 호출하도록 수정해야 함
    // 예: axios.get(`/api/check-username?username=${username}`)
    const existingUsernames = ["user1", "user2", "user3"];
    if (existingUsernames.includes(username)) {
      setIsUsernameValid(false);
      setMessage("이미 사용 중인 아이디입니다.");
    } else {
      setIsUsernameValid(true);
      setMessage("사용 가능한 아이디입니다.");
    }
  };

  return (
    <Container>
      <Logo src={LogoIcon} alt="LogoIcon" />
      <Title>회원가입</Title>
      <Form>
        <Label>아이디</Label>
        <InputGroup>
          <Input
            type="text" 
            placeholder="아이디를 입력해주세요." 
            value={username} 
            onChange={handleUsernameChange} 
          />
          <CheckButton type="button" onClick={checkUsername}>중복 확인</CheckButton>
        </InputGroup>
        {isUsernameValid !== null && <Message isValid={isUsernameValid}>{message}</Message>}
        <Label>비밀번호</Label>
        <Input type="password" placeholder="비밀번호를 입력해주세요." />
        <Note>※ 영문, 숫자를 포함한 8자리 이상</Note>
        <Label>비밀번호 확인</Label>
        <Input type="password" placeholder="비밀번호를 입력해주세요." />
        <Button>
          <SignupButton type="submit">회원가입</SignupButton>
          <LoginButton type="button">로그인</LoginButton>
        </Button>
      </Form>
    </Container>
  );
};

export default Signup;
