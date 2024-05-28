import { useNavigate } from "react-router-dom";
import Banner from "../../components/Banner";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SpecCardList from "../../components/SpecCardList";

function SpecOpinion() {
	const navigate = useNavigate();
	return (
		<>
			<Header></Header>

			<Banner
				text1="스펙 우수자의 조언을 듣고 싶나요?"
				text2="지금 바로"
				text3="피드백을 받아보세요!"
				text4="소견서 신청하기"
				move = {() => {navigate("/createOpinion")}}
			></Banner>

			<div>
				{/* 피드백 취준생 p */}
				<div>
					<p>피드백을 원하는 취준생들입니다.</p>
				</div>
				{/* 애들 소견서 띄워주는 곳 */}
			</div>
			<div>
				{/* 몇 개를 띄울 것인지 */}
				<SpecCardList />
			</div>
			<Footer/>
		</>
	);
}

export default SpecOpinion;
