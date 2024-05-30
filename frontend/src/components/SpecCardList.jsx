import { useEffect, useState } from "react";
import SpecCard from "./SpecCard";

import Config from "../config/config";

function SpecCardList() {
	const tempNumCard = 4;
	const [numCards, setNumCards] = useState(tempNumCard);

	useEffect(() => {
		const fetchData = async () => {
			try {
				//
				const response = await fetch(`${Config.baseURL}/api/careerdoctor/posts`, {
					method: "GET",
					headers: Config.headers,
				});

				const data = await response.json();
				console.log(data);

				if (response.status === 201) {
					// setData(data);
					//data 들어옴
				} else {
					alert("데이터를 불러오는데 실패했습니다.");
				}
			} catch (error) {
				alert("에러 발생");
				console.log(error);
			}
		};

		fetchData();
	}, []);

	return (
		<>
			<div>
				<div>
					{Array.from({ length: numCards }).map((_, index) => (
						<SpecCard key={index} />
					))}
				</div>
			</div>
			<div>
				<button onClick={() => setNumCards(numCards + 4)}>더보기</button>
			</div>
		</>
	);
}
export default SpecCardList;
