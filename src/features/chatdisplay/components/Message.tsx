import React from 'react';
import styled from 'styled-components';
import {Message_button} from "./Button-Submit"
import Text_input from "./Text_input";

//Message, Located on the bottom of the page
const MessageBody = styled.body`
	position: absolute;

	background-color: #FFFFFF;
	border-radius: 10px;

	bottom: 3%;
	right: 40%;

	height: 7vh;
	display: flex;
	gap: 20px;
`;

//Include Message parameter (?)
const MessageInput = () =>{



	return(
		<MessageBody>
			<Text_input/>
			<Message_button>Send</Message_button>
		</MessageBody>
	);
}

export default MessageInput;