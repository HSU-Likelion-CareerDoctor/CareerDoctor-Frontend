import { useState } from "react";
import Header from "../../components/Header";
import styled from "styled-components";
import rect from "../../img/rectangle.png";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Footer from "../../components/Footer";
const Container = styled.div`
	display: flex;
	justify-content: center;
	width: 100vw;
	height: 92vh;
	font-family: "Pretendard Variable";
`;

const Container1 = styled.div`
	width: 60%;
`;

const Div1 = styled.div`
	display: flex;
	margin-top: 3vw;
`;

const NameP = styled.p`
	color: #000;
	font-size: 1.4vw;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
`;

const One = styled.p`
	color: var(--point-text-color, #086cc9);
	font-size: 1.2vw;
	font-style: normal;
	font-weight: 600;
	line-height: normal;
`;

const Div2 = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	width: 1.75vw;
	margin-left: 2.25vw;
`;

const Img = styled.img`
	width: 0.3vw;
	height: 0.85vw;
	flex-shrink: 0;
`;

const Two = styled.p`
	color: #a8a8a8;
	font-size: 1.2vw;
	font-style: normal;
	font-weight: 600;
	line-height: normal;
`;
function SpecDiagnosis() {
	const [name, setName] = useState("OO");
	const [page, setPage] = useState(1);

	// spec_cert_id, name, birth, gender, level, is_public, created_at, updated_at
	const [inputData, setInputData] = useState({
		name: "",
		birth: "",
		gender: "",
	});

	return (
		<>
			{/* headr */}
			<Header />
			<Container className="Container">
				<Container1 className="Container1">
					{/* body */}
					<Div1>
						{/* Name */}
						<div>
							<NameP>{name}님의 스펙을 진단중입니다.</NameP>
						</div>
						{/* Page  */}
						<Div2>
							<One>{page}</One>
							<Img src={rect} alt="대충 / 이미지"></Img>
							<Two>2</Two>
						</Div2>
					</Div1>

					{page === 1 ? (
						<Page1 nextPage={() => setPage(page + 1)} />
					) : (
						<Page2 prevPage={() => setPage(page - 1)} />
					)}
				</Container1>
			</Container>
		</>
	);
}

export default SpecDiagnosis;
