import React from 'react';
import styled from 'styled-components';

const Head = styled.h1`
	font-size: 20px;
	text-align: center;

	border-radius: 8px;
	border: 1px solid orange;
	&:focus{
		outline: none;
		border-color: red
	}
`;

const StringInput = styled.input`



	border: 1px solid Green;
	&:focus{
		outline: none;
		border-color: orange
}
`;

export const Chat_page = () =>{


	
	return(
	<>
	<div>
		<Head>Messages</Head>
		
	</div>
	<form>
			<StringInput/>

	</form>
	</>
	);
}
