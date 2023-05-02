import React from "react";
import styled from "styled-components";
import ThumbsUp from "../misc/ThumbsUp.jpg";


const SearchForm = styled.div`


`

const SearchInput = styled.input`
	


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