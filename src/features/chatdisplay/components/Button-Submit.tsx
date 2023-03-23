import styled from 'styled-components';
import React from 'react';

export const ButtonSubmit = styled.button`
	background-color: #FFFFFF;
	position: absolute;
	right: 1px;
	bottom: 1px;

	margin: 1em;
	border-radius: 8px;
	border: none;
`;

export const Submit_bt = () =>{

	console.log("hello world")

	
	return(
		<ButtonSubmit type="submit">Subimt Message</ButtonSubmit>
	)
}

export default Submit_bt;