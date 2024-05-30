import styled from "styled-components";
const Container = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 2vw;

	justify-content: space-between;
	height: 23.7vw;
	font-family: "Pretendard Variable";
`;

const StyleP = styled.p`
	color: #000;
	font-size: 0.9vw;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
`;

const Input = styled.input`
	border-radius: 0.9vw;
	border: 0.05vw solid #b6b6b6;

	width: 13.2vw;
	height: 2.6vw;
	flex-shrink: 0;

	&:hover {
		border: 0.1vw solid var(--point-box, #558dfa);
	}
`;

const GenderDiv = styled.div`
	width: 14.7vw;

	display: flex;
	justify-content: space-between;
`;

const GenderInput = styled.input`
	border-radius: 0.9vw;
	border: 0.05vw solid #b6b6b6;

	width: 7.1vw;
	height: 2.6vw;
	flex-shrink: 0;

	&:hover {
		border: 0.1vw solid var(--point-box, #558dfa);
	}
`;

const Foot = styled.div`
	display: flex;

	margin-top: 10.2vw;

	justify-content: space-between;
`;

const FootButton = styled.input`
	width: 8.5vw;
	height: 3.5vw;
	flex-shrink: 0;

	border-radius: 3.5vw;
	background: #e0e0e0;

	color: #2f2f2f;

	font-size: 1vw;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
`;
export default function Page1({ nextPage }) {
	return (
		<>
			{/* 입력 폼 */}
			<Container>
				{/* Name */}
				<div>
					<StyleP>이름</StyleP>
					<Input type="text" placeholder="이름을 입력해주세요." />
				</div>

				<div>
					<StyleP>생년월일</StyleP>
					<Input type="text" placeholder="YYYY / MM / DD" />
				</div>

				<div>
					<StyleP>성별</StyleP>
					<GenderDiv>
						<GenderInput type="button" value="남성" />
						<GenderInput type="button" value="여성" />
					</GenderDiv>
				</div>
			</Container>

			{/* 이전과 다음 */}
			<Foot>
				<FootButton type="button" value="이전" />
				<FootButton
					style={{ color: "#AEAEAE" }}
					type="button"
					value="다음"
					onClick={nextPage}
				/>
			</Foot>
		</>
	);
}
