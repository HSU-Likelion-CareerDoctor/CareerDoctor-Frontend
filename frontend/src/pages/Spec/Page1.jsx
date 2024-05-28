export default function Page1({ nextPage }) {
	return (
		<>
			{/* 입력 폼 */}
			<div>
				{/* Name */}
				<div>
					<label>이름</label>
					<input type="text" placeholder="이름을 입력해주세요." />
				</div>

				<div>
					<label>생년월일</label>
					<input type="text" placeholder="YYYY / MM / DD" />
				</div>

				<div>
					<label>성별</label>
					<input type="button" value="남성" />
					<input type="button" value="여성" />
				</div>
			</div>

			{/* 이전과 다음 */}
			<div>
				<div>
					<input type="button" value="이전" />
					<input type="button" value="다음" onClick={nextPage} />
				</div>
			</div>
		</>
	);
}
