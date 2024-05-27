/* 여기서 스펙 진단 페이지 */
import React, { useState } from "react";
import styled from "styled-components";

import Page1 from "./Page1";
import Page2 from "./Page2";

const Container = styled.div`
	display: flex;

	font-family: "Pretendard Variable";
	justify-content: center;
	align-items: center;
	height: 100vh;
`;

const StyledP = styled.p`
	font-style: normal;
	font-weight: 700;
	line-height: normal;
`;

const Header = styled.div`
	display: flex;
`;

const Contain = styled.div`
	width: 63.125vw;
	height: 70vh;
`;

function Contact() {
	const [name, setName] = useState("OO");
	const [nowPage, setPage] = useState(1);

	return (
		<>
			<Container className="Container">
				<Contain className="">
					{/* header */}
					<Header className="Header">
						<StyledP >{name}님의 스펙을 진단중입니다.</StyledP>
						<StyledP>{nowPage}</StyledP><StyledP>/2</StyledP>
					</Header>

					{nowPage === 1 ? (<Page1 ButtonText={"다음"} ClickEvent={() => setPage(nowPage + 1)} />) :
					 (<Page2 name={name}ButtonText={"진단받기"} ClickEvent={() => setPage(nowPage - 1)} />)}
				</Contain>
			</Container>
		</>
	);
}

export default Contact;
