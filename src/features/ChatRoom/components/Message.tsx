import React, {useState} from "react";	
import styled from "styled-components";
import SendButton from "./SendButton";
import MessageInput from "./MessageInput";
import Messages from "./Messages";

const MessageContainer = styled.div`
	position: fixed;
	background-color: #B5B5B5;

	display: flex;

	align-items: center;
	justify-content: space-between;

	padding: 10px;
	box-shadow: 0px -1px 5px rgba(0, 0, 0, 0.1);

	bottom: 0;
	width: 100%;
`;

const MessageForm = styled.form`
	background-color: #FFFFFF;
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

	const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
		event.preventDefault();

		if(message !== ""){
			console.log(message);

			setMessage("");
		}else{
			console.log("This message is null");
		}
	};

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