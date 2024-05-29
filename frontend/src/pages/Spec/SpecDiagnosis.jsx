import { useState } from "react";
import Header from "../../components/Header";
import styled from "styled-components";
import rect from "../../img/rectangle.png";
import Page1 from "./Page1";
import Page2 from "./Page2";
const Container = styled.div`
	width: 100vw;
	height: 100vh;
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
			<Container>
				{/* headr */}
				<Header></Header>

				{/* body */}
				<div>
					{/* Name */}
					<div>
						<p>{name}님의 스펙을 진단중입니다.</p>
					</div>
					{/* Pag  */}
					<div>
						<p>{page}</p>
						<img src={rect} alt="대충 / 이미지"></img>
						<p>2</p>
					</div>
				</div>
				{page === 1 ? (
					<Page1 nextPage={() => setPage(page + 1)} />
				) : (
					<Page2 prevPage={() => setPage(page - 1)} />
				)}
			</Container>
		</>
	);
}

export default SpecDiagnosis;
