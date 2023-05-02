import React from "react";
import styled from "styled-components";
import ChatHeaderPage from "./ChatHeaderPage";
import MessageBox from "./MessageBox";


//Background
const ChatPageBody = styled.body`
	position: fixed;
	background-color: #d2d2d4;


	height: 100%;
	width: 100%;
`;

export function ChatPage(){


	return(
		<ChatPageBody>
			<ChatHeaderPage/>

			<MessageBox/>
			
			<p>Insert Navebar here</p>
		</ChatPageBody>
	);
}

export default ChatPage;