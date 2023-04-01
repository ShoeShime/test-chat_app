import React from 'react';
import styled from 'styled-components';

const Head = styled.h1`
	font-size: 20px;
	text-align: left;

	border-radius: 8px;
	border: 1px solid orange;
	&:focus{
		outline: none;
		border-color: red
	}
`;

const ProfileImage = styled.img`

	border: 1px solid blue;
	&:focus{
		outline: none;
		border-color: orange
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
		<ProfileImage/>
	</div>
	<form>
			<StringInput/>

	</form>
	</>
	);
}
