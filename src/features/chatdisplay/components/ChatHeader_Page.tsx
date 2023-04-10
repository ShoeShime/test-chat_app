import React from "react";
import styled from "styled-components";
import SearchMessage from "./SearchMessage";
import ThumbsUp from "../misc/ThumbsUp.jpg";

//Header, Top of the Page
const MessageHeader = styled.header`
	background-color: #FFA500;

	display: flex;
	flex-direction: column;

	align-items: center;
	justify-content: center;
	align-items: flex-start;

	padding: 20px;
`;

const HeaderContainer = styled.div`
	display: flex;

	align-items: center;
	justify-content: space-between;

	width: 100%;
`;

const MessageTitle = styled.p`
	font-size: 2em;
	font-weight: bold;

	margin-top: 0;
`;

const MessageImg = styled.img`
	width: 50px;
	height: 50px;

	margin-left: 15px;
	border-radius: 50%;
`;

const ChatHeader_Page = () =>{

	return(
		<MessageHeader>
			<HeaderContainer>
				<MessageTitle>Messages</MessageTitle>

				<MessageImg src={ThumbsUp}/>

			</HeaderContainer>

			<SearchMessage/>

		</MessageHeader>
	);
}

export default ChatHeader_Page;