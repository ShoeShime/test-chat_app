import React from "react";
import styled from "styled-components";

const Message_List = styled.div`
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
			<Message_List>
				
				<p>wah</p>
				<p>wah</p>
				<p>wah</p>
			</Message_List>
	);
}

export default Messages;