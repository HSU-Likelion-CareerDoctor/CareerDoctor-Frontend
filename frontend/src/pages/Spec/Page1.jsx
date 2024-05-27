import styled from "styled-components";
const Section = styled.div`
	display: flex;
	flex-direction: column;
`;

const FormDiv = styled.div`
	display: flex;
	flex-direction: column;
`;

const Footer = styled.div`
	display: flex;
`;
export default function Page1({ ButtonText, ClickEvent }) {
	return (
		<>
			<Section>
				<FormDiv>
					<styledP>이름</styledP>
					<input type="text" placeholder="이름을 입력해주세요."></input>
				</FormDiv>
				<FormDiv>
					<styledP>이름</styledP>
					<input type="text" placeholder="YYYY   /   MM   /   DD"></input>
				</FormDiv>
				<FormDiv>
					<styledP>이름</styledP>
					<input type="button" value="남성"></input>
					<input type="button" value="여성"></input>
				</FormDiv>
			</Section>
			<Footer>
				<input type="button" value="이전"></input>
				<input type="button" value={ButtonText} onClick={ClickEvent}></input>
			</Footer>
		</>
	);
}
