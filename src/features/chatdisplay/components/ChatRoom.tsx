import React, {useState} from "react";
import styled from 'styled-components';
import ChatHeader from "./ChatHeader"
import Message from "./Message";
import Messages from "./Messages";

//Background
const M_body = styled.body`
	background-color: #d2d2d4;

	height: 100vh;
	text-align: center;
`;

export function ChatRoom(){


	return(
	<>
		<M_body>
			<ChatHeader/>

			<Messages />

			<Message/>
		</M_body>
	</>
	)
}

export default ChatRoom;