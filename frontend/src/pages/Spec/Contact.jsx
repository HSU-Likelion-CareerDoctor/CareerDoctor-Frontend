/* 여기서 스펙 진단 페이지 */
import React, { useState } from "react";
import styled from "styled-components";

const Conatiner = styled.div`
	display: flex;
	justify-content: center;
	flex-direction : column;
	font-family: "Pretendard Variable";
`;

const Page = styled.p`
	font-size: 1.05rem;
	font-style: normal;
	font-weight: 600;
	line-height: normal;
`

const TextP = styled.p`
	font-style: normal;
	font-weight: 700;
	line-height: normal;
`;

const NameDiv = styled.div`
	display: flex;
	justify-content : space-evenly ;
`;

const PageDiv = styled.div`
	display:  flex;
	justify-content : center;
`;


const InputStyle = styled.input`
	border-radius: 18px;
	border: 1px solid #B6B6B6;
`
const Footer = styled.footer`

`
function Contact() {
	const [name,setName] = useState('OO');
	const [nowPage,setPage] = useState(1);
	return (
		<>
		

		



		
			<Conatiner>

				{/* header */}
				<NameDiv>
					<TextP style={{fontSize : "1.25rem"}}>{name}님의 스펙을 진단중입니다.</TextP>
					<PageDiv>
						<Page style={{color : '#086CC9'}}>{nowPage}</Page>
						<Page style={{color : '#A8A8A8'}}> /2</Page>
					</PageDiv>
					
				</NameDiv>

				{/* section */}
				<div>
					<TextP style={{fontSize : "1rem"}}>이름</TextP>
					<InputStyle type="text" style={{heigh : "100%"}} placeholder="이름을 입력해주세요."></InputStyle>
				</div>

				<div>
					<TextP style={{fontSize : "1rem"}}>생년월일</TextP>
					<InputStyle type="text" style={{heigh : "100%" , letterSpacing : "1px", textAlign : 'center' }} placeholder="YYYY  /   MM   /   DD"></InputStyle>
				</div>

				<div>
					<TextP style={{fontSize : "1rem"}}>성별</TextP>
					<InputStyle type="button"></InputStyle><InputStyle type="button"></InputStyle>
				</div>
				<div>
					<InputStyle type="button"></InputStyle>
					<InputStyle type="button"></InputStyle>
				</div>
				{/* footer */}
				<Footer></Footer>
			</Conatiner>
		</>
	);
}

export default Contact;
