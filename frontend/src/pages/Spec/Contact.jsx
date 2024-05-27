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

const styledP = styled.p`
	font-style: normal;
	font-weight: 700;
	line-height: normal;
`;

const Header = styled.div`
	width: 63.125vw;
	height: 70vh;
`;

function Contact() {
	const [name, setName] = useState("OO");
	const [nowPage, setPage] = useState(1);

	const ClickEvent = (plus) => {};
	return (
		<>
			<Container>
				{/* header */}
				<Header>
					<styledP style={{ fontSize: "1.75rem" }}>
						{name}님의 스펙을 진단중입니다.
					</styledP>

					<styledP>{nowPage}</styledP>
					<styledP>/2</styledP>
				</Header>
				{nowPage === 1 ? (
					<Page1 ButtonText={"다음"} ClickEvent={() => setPage(nowPage + 1)} />
				) : (
					<Page2 ButtonText={"진단받기"} ClickEvent={() => setPage(nowPage - 1)} />
				)}
			</Container>
		</>
	);
}

export default Contact;
