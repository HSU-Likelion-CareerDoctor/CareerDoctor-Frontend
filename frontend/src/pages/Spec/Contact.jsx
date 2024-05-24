import React from "react";
import styled from "styled-components";
import SpecHeader from "../../components/SpecHeader";

const Conatiner = styled.div`
	display: flex;
	background-color: cyan;

	width: 100vw;
	height: 100vh;
`;

function Contact() {
	return (
		<>
			<Conatiner>
				<SpecHeader></SpecHeader>
			</Conatiner>
		</>
	);
}

export default Contact;
