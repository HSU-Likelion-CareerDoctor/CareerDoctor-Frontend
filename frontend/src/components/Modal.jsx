import React from "react";
import styled from "styled-components";
import close from "../img/button.png";
import { useNavigate } from "react-router-dom";

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 2vw;
  border-radius: 1vw;
  width: 49vw;
  height: 25.1vw;
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 5.2vw;
`;

const CloseButton = styled.img`
  width: 1.2vw;
  height: 1.2vw;
  transform: rotate(90deg);
  flex-shrink: 0;
  cursor: pointer;
`;

const Button = styled.div`
  display: flex;
  width: 15.6vw;
  height: 3.2vw;
  justify-content: center;
  align-items: center;
  gap: 0.4vw;
  border-radius: 0.4vw;
  background: #edf4f9;
  box-shadow: 0vw 0vw 0.2vw 0vw rgba(0, 0, 0, 0.6);
  margin-top: 0.8vw;
  color: #000;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 1vw;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 30px */
  &:hover {
    background: #558dfa;
    color: white;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const BigText = styled.div`
  color: #000;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 1.4vw;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 42px */
  margin-bottom: 1vw;
`;

const SmallText = styled.div`
  color: #000;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 0.8vw;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 24px */
  margin-bottom: 2.65vw;
`;

const Modal = ({ onClose }) => {
  const navigate = useNavigate();

  return (
    <ModalContainer>
      <ModalContent>
        <ImgContainer>
          <CloseButton src={close} onClick={onClose}></CloseButton>
        </ImgContainer>
        <BigText>로그인이 필요한 서비스입니다.</BigText>
        <SmallText>
          지금 로그인하여 커리어닥터의 다양한 서비스를 이용해보세요!
        </SmallText>
        <ButtonContainer>
          <Button onClick={() => navigate("/login")}>로그인</Button>
          <Button onClick={() => navigate("/signup")}>회원가입</Button>
        </ButtonContainer>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
