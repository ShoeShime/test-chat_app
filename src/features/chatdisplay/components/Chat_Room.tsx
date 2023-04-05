import React from "react";
import styled from 'styled-components';
import MessageInput from "./Message";

//Header, Top of the Page
const Message_header = styled.header`

	font-weight: bold;
	font-size: 25px;

	text-align: center;
`;

//Background
const M_body = styled.body`
	background-color: #d2d2d4;

	height: 100vh;
`;

export function Chat_Room(){


	return(
	<>
		<M_body>
			<Message_header>
				Vendor Name
			</Message_header>

				<div>Message Pop-ups here</div>

			<MessageInput/>
		</M_body>
	</>
	)
}

export default Chat_Room;