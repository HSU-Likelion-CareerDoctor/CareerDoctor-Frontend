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
export default function Page2({ ButtonText, ClickEvent }) {
	return (
		<>
			<Section>
				<FormDiv>
					<styledP>학력*</styledP>
					<select id="schoolDivision">
						<option value="high">고등학교</option>
						<option value="black">검정고시</option>
						<option value="two">2년제 대학</option>
						<option value="three">3년제 대학</option>
						<option value="four">4년제 대학</option>
						<option value="master">대학원 (석사)</option>
						<option value="doctor">대학원 (박사)</option>
					</select>
					<input type="text" placeholder="학교명"></input>

					<label>입학년월</label>
					<div className="input-group">
						<input type="text" id="admission-date" placeholder="YYYY / MM" />
						<select id="admission-type">
							<option value="" disabled selected hidden>
								구분
							</option>
							<option value="입학">입학</option>
							<option value="편입">편입</option>
						</select>
					</div>

					<label>졸업(예정)년월</label>
					<div className="input-group">
						<input type="text" id="admission-date" placeholder="YYYY / MM" />
						<select id="admission-type">
							<option value="" disabled selected hidden>
								구분
							</option>
							<option value="재학">재학</option>
							<option value="휴학">휴학</option>
							<option value="중퇴">중퇴</option>
							<option value="수료">수료</option>
							<option value="졸업">졸업</option>
						</select>
					</div>

					<input type="text" placeholder="전공명"></input>
					<label>평균학점</label>
					<input type="text" id="admission-date" placeholder="" />
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
				<input type="button" value="이전" onClick={ClickEvent}></input>
				<input type="button" value={ButtonText}></input>
			</Footer>
		</>
	);
}
