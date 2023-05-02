import React from "react";
import styled from "styled-components";
import SearchMessage from "./SearchMessage";
import ThumbsUp from "../misc/ThumbsUp.jpg";

//Header, The Top of the Page
const MessageHeader = styled.header`
	background-color: #FFA500;

	display: flex;
	flex-direction: column;

	align-items: strech;
	justify-content: flex-end;

	height: 20%;
	max-height: 120px;

	padding: 0 10px;
	box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);

`;

const HeaderContainer = styled.div`

	display: flex;

	align-items: center;
	justify-content: space-between;

`;

const MessageTitle = styled.p`

	color: #333333;

	font-size: 3em;
	font-weight: bold;

	margin-right: 20px;
`;

const UserIcon = styled.img`

	height: 4em;
	width: 4em;

	margin-left: 20px;
	border-radius: 50%;
`;

const ChatHeaderPage = () =>{

	return(
		<MessageHeader>

			<HeaderContainer>
				<MessageTitle className="Title">Message</MessageTitle>

				<UserIcon className="User-Image" src={ThumbsUp} alt="User icon"/>

				<SearchMessage/>

			</HeaderContainer>

		</MessageHeader>
	);
}

export default ChatHeaderPage;