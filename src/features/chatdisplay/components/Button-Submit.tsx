import styled from 'styled-components';
import React from 'react';

export const Message_button = styled.button`

	background-color: #000000;
	color: #FFFFFF;

	font-size: 15px;
	cursor: pointer;

	border-radius: 20%;
`;	


//Include Message parameter (?)
const Submit_bt = async() =>{


	console.log("hello world")

	return(
		<Message_button onClick={Submit_bt}></Message_button>
	)
}

export default Message_button	;