import React from "react";
import styled from 'styled-components';
import {Message_text, Message_button} from "./Button-Submit"

//
const MessageBody = styled.form`
	position: sticky


`;

const Message_header = styled.header`
	position: sticky

	
`;

const M_body = styled.body`
	background-color: #d2d2d4;

	height: 100%;
	width: 100%;
	position: absolute
`;


export function Chat_Room(){


	return(
	<>
		<M_body>
			<Message_header>
				<p>Vendor Name Here</p>
			</Message_header>


			<MessageBody>
				<Message_text></Message_text>
				<Message_button>Send</Message_button>
			</MessageBody>
		</M_body>
	</>
	)
}