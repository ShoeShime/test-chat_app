import React from "react";
import styled from "styled-components";

const MessageList = styled.div`
	background-color: #FFFFAF;
	display: flex;

	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-end;

	height: calc(100vh - 115px);
	padding: 10px;

	overflow-y: scroll;
`;

const MessageWrapper = styled.div`	
	background-color: #1982FC;

	border-radius: 25px;

	width: 50%;

	right: 3%;
`;

const MessageText = styled.p`

	color: #FFFFFF;

	text-align: left;

	margin-inline-start: 5px;

`;



const Messages = () =>{



	return(
			<MessageList>
				<MessageWrapper>

					<MessageText>
						Test 1: This is a bunch of line of text, would this work hopefully. 
						I need to add more text horray okay a bit more, this looks kinda nice
					</MessageText>

				</MessageWrapper>

				<MessageWrapper>

					<MessageText>
						Test 2: This is a bunch of line of text, would this work hopefully. 
						I need to add more text horray okay a bit more, this looks kinda nice
					</MessageText>

				</MessageWrapper>

			</MessageList>
	);
}

export default Messages;