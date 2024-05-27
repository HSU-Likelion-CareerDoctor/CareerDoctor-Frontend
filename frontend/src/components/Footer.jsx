import React from "react";
import logo4 from "../img/logo4.png";
import styled from "styled-components";

const Container1 = styled.div`
  display: flex;
  justify-content: center;
  height: 7.9vw;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
`;

const Line = styled.div`
  width: 100%;
  height: 0.01vw;
  flex-shrink: 0;
  background: #ebebeb;
`;

const Text = styled.div`
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 0.8vw;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-align: end;
`;

function Footer() {
  return (
    <>
      <Line />
      <Container1>
        <Container>
          <img src={logo4} style={{ width: "14vw", height: "7vw" }} />

          <Text>
            한성대학교 멋쟁이사자처럼 부기톤 커리어닥터 <br />
            서울특별시 성북구 삼선교로 16길(삼선동2가) 116 한성대학교
          </Text>
        </Container>
      </Container1>
    </>
  );
}

export default Footer;
