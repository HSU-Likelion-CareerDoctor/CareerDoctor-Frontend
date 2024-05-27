import styled from "styled-components";

const Section = styled.div`
	display: flex;
	flex-direction: column;
	height: 80%
`;

const FormDiv = styled.div`
	display: flex;
	flex-direction: column;
	height: 25%;
`;

const Footer = styled.div`
	display: flex;
`;

const StyledP = styled.label`
	color: #000;
	font-family: "Pretendard Variable";
	font-size: 1.125rem;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
`;


const InputStyled = styled.input`
	border-radius: 18px;
	border: 1px solid #B6B6B6;
`
export default function Page1({ ButtonText, ClickEvent }) {
	return (
		<>
			<Section className="section">
				<FormDiv className="formdiv">
					<StyledP>이름</StyledP>
					<InputStyled type="text" placeholder="이름을 입력해주세요."></InputStyled>
				</FormDiv>
				<FormDiv className="formdiv">
					<StyledP>생년월일</StyledP>
					<InputStyled type="text" placeholder="YYYY   /   MM   /   DD"></InputStyled>
				</FormDiv>
				<FormDiv className="formdiv">
					<StyledP>성별</StyledP>
					<div><InputStyled type="button" value="남성"></InputStyled>
					<InputStyled type="button" value="여성"></InputStyled>								</div>
					
				</FormDiv>
			</Section>

			<Footer>
				<InputStyled type="button" value="이전"></InputStyled>
				<InputStyled type="button" value={ButtonText} onClick={ClickEvent}></InputStyled>
			</Footer>
		</>
	);
}
