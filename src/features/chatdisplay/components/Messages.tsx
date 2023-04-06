import React from "react";
import styled from "styled-components";

const Message_Body = styled.div`
	background-color: #FFFFAF;
	display: flex;

	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-end;

	height: calc(100vh - 115px);
	padding: 10px;

	overflow-y: scroll;
`;


const Messages = () =>{


	return(
			<Message_Body>
				<p>wah</p>
				<p>woah</p>
				<p>woah</p>
			</Message_Body>
	);
}

export default Messages;