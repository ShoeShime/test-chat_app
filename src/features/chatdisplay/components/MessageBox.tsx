import React from "react";
import styled from "styled-components";
import Conversation from "./Conversation";
import CatPicture from "../misc/ThumbsUp.jpg";

const MessageWrapper = styled.div`
	background-color: #FFFFFF;



`; 

//implement array; currently not in use
const conversations: Conversation[] = [
	{
		id: 1,
		profilePic: CatPicture,
		name: "Cesar Magana",
		lastmessage: "I want icecream",
		timestamp: new Date(),
		isSeen: true
	}
];


const MessageBox = () =>{


	return(
		<MessageWrapper className="Inbox">

			<Conversation/>

			<Conversation/>

			<Conversation/>

		</MessageWrapper>
	);
}

export default MessageBox;