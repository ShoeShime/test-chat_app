import React from "react";
import styled from "styled-components";
import Conversation from "./Conversation";

const MessageWrapper = styled.div`
	background-color: #d2d2d4;

	display: flex;
	flex-direction: column;

	margin: 10px;

	border-radius: 5%;

	height: 125px;

`; 

const MessageBox = () =>{


	return(
		<MessageWrapper>

			<Conversation/>

		</MessageWrapper>
	);
}

export default MessageBox;