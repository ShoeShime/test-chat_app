import React from "react";
import styled from "styled-components";
import ChatHeader_Page from "./ChatHeader_Page";

//Background
const M_body = styled.body`
	background-color: #d2d2d4;

	height: 100vh;
	text-align: center;
`;

export function ChatPage(){


	return(
		<M_body>
			<ChatHeader_Page/>


		</M_body>
	);
}

export default ChatPage;