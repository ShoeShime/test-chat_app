import React from "react";
import styled from "styled-components";


//Header, Top of the Page
const Message_header = styled.header`
	position: fixed;
	background-color: #FFA500;
	
	height: 10%;
	width: 100%;
`;

const MyName = styled.p`

	font-weight: bold;
	font-size: 28px;
`;

const ChatHeader_Room = () =>{


	return(
	<Message_header>
		<MyName>Vendor Name</MyName>
	</Message_header>
	);
}

export default ChatHeader_Room;