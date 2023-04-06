import React from "react";
import styled from "styled-components";



const Search_Form = styled.form`

	justify-content: center;
	flex: 1;

	border-radius: 10px;
	padding: 5px;

`

const Search_Input = styled.input`

	border: none;
	border-radius: 10px;
	outline: none;

	width: 95%;

`;

const Search_Picture = styled.img`

`;

const Search_Message = () =>{


	return(
		<Search_Form>
			
			<Search_Picture/>
			<Search_Input placeholder="Search"></Search_Input>

		</Search_Form>
	);
};

export default Search_Message;