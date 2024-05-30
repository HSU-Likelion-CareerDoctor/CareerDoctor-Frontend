import Header from "../../components/Header";
import check from "../../img/check.gif";
function OpinionRegister() {
	return (
		<>
			<div>
				<Header />

				<div>
					{/* 소견서 전달 완료*/}
					<div>
						<div>소견서 전달 완료!</div>
						<div>
							<img src={check} alt="체크 이미지"></img>
						</div>
						<div>소견서 전달이 완료되었어요!</div>
					</div>

					<div>
						<button>마이페이지 이동</button>
						<button>다른 소견서 작성하러 가기</button>
					</div>
				</div>
			</div>
		</>
	);
}
export default OpinionRegister;
