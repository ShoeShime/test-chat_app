import React from "react";
import styled from "styled-components";
import ChatHeader_Page from "./ChatHeader_Page";
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
			<ChatHeader_Page/>

			<MessageBox/>
			
			<p>bottom part</p>
		</ChatPageBody>
	);
}

export default ChatPage;