import React, {useState} from "react";	
import styled from "styled-components";
import SendButton from "./SendButton";
import MessageInput from "./MessageInput";

const MessageContainer = styled.div`
	position: fixed;
	background-color: #8B4000;

	display: flex;

	align-items: center;
	justify-content: space-between;

	padding: 10px;
	box-shadow: 0px -1px 5px rgba(0, 0, 0, 0.1);

	bottom: 0;
	width: 100%;
`;

const MessageForm = styled.form`
	background-color: #FFA500;
	width: 100%;

	display: flex;
	align-items: center;

	border-radius: 10px;
	padding: 10px;

	margin-right: 20px;
	gap: 20px;
`;


const Message = () =>{
	


	return(
		<MessageContainer>
			<MessageForm >
				<MessageInput 
					placeholder="Type your message here"
					

				/>
	
				<SendButton type="submit">Send</SendButton>
			</MessageForm>
		</MessageContainer>
	);
}

export default Message;