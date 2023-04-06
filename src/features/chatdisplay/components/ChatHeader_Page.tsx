import React from "react";
import styled from "styled-components";
import Search_Message from "./Search_Message";

//Header, Top of the Page
const Message_header = styled.header`
	position: absolute;
	background-color: #FFA500;

	text-align: left;
	width: 100%;

	padding: 10px;
`;

const Message_Title = styled.p`

	font-weight: bold;
	font-size: 20px;

	display: inline-block;

`;

const Message_Img = styled.img`
	display: inline-block;

	border-radius: 20px;

`;

const ChatHeader_Page = () =>{

	return(
		<Message_header>
			<Message_Title>Messages</Message_Title>

			<Message_Img/>

			<Search_Message/>

		</Message_header>
	);
}

export default ChatHeader_Page;