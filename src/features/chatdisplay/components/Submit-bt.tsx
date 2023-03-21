import styled from 'styled-components'
import React from 'react';

export const Button_submit = styled.button`
	background-color: #FFFFFF;


	margin: 1em;
	border-radius: 8px;
	border: none;
`;



export const Submit_bt = () =>{

	console.log("hello world")

	
	return(
		<Button_submit onClick={Submit_bt}>This is a button</Button_submit>
		
	)
}

export default Submit_bt;