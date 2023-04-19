import React, {useState} from "react";	
import styled from "styled-components";
import SendButton from "./SendButton";
import MessageInput from "./MessageInput";
import {handleMessageSend} from "./Messages";

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


const Message = (	) =>{
	const [message, setMessage] = useState("");

	//This function below should handle messages that are being sent:
	//	1. If the SendButton component is press, it should not refresh the page.

	//	2. It should also "Send the message" in its MessageWrapper (located in Messages.tsx)

	//	3. For now the message is shown in the console as a simple print statement. 
	//		 We might need to implement the backend to send message properly

	const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
		event.preventDefault();

		try{
			var SenderT = (document.getElementById("MessageText") as HTMLInputElement).value;

			console.log(SenderT);
			handleMessageSend(SenderT);

			(document.getElementById("MessageText") as HTMLInputElement).value = "";
		}catch(err){

			console.log("This is null");
		}
	}

	return(
		<MessageContainer>
			
			<MessageForm>

			<MessageInput 
				id="MessageText"
				placeholder="Type your message here"
				type="text"
				value={message}
				onChange={(event) => setMessage(event.target.value)}
			/>
				
		<SendButton 
			type="submit"
			onClick={handleSubmit}
		>
				Send
		</SendButton>

			</MessageForm>
		</MessageContainer>
	);
}

export default Message;