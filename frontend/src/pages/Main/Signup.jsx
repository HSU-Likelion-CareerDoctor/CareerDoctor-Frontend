import React from "react";
import styled from "styled-components";
import LogoIcon from "../../img/logo3.png";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

`;

const Logo = styled.img`
  width: 150px;
  height: auto;
`;


const Signup = () => {
  return (
    <Container>
      <Logo src={LogoIcon} alt="LogoIcon" />
    </Container>
  );
};

export default Signup;

