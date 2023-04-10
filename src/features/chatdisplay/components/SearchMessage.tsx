import React from "react";
import styled from "styled-components";
import ThumbsUp from "../misc/ThumbsUp.jpg";


const SearchForm = styled.div`
	background-color: #D3D3D3;

	border: none;
	border-radius: 20px;
	display: flex;
	align-items: center;

	width: 100%;
	padding: 10px;
	box-sizing: border-box;
`

const SearchInput = styled.input`
	background-color: #D3D3D3;
	color: #121212;

	border: none;
	outline: none;

	margin-left: 20px;

	width: 100%;

	::placeholder{
		color #128923;
	}
`;


const SearchPicture = styled.img`

	width: 20px;
	height: 20px;

	border-radius: 50%;
`;

const SearchMessage = () =>{


	return(
		<SearchForm>
			
			<SearchPicture src={ThumbsUp}/>
			<SearchInput placeholder="Search"></SearchInput>

		</SearchForm>
	);
}

export default SearchMessage;