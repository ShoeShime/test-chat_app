import React from "react";
import styled from "styled-components";

const MessageWrapper = styled.div`
	background-color: #ffffff;

	display: flex;
  flex-direction: column;

  gap: 10px;

  padding: 10px;
	border-radius: 10px;
	margin-bottom: 10px;

`;

const MessagerBox = styled.div`
	background-color: #ffffff;

	display: flex;

  align-items: center;
  justify-content: space-between;

  padding: 10px;

  border-radius: 10px;
	margin-bottom: 10px;
  
  cursor: pointer;

  transition: all 0.2s ease-in-out;

	&:hover {
    background-color: #f5f5f5;
  }
`;

const MessageTimestamp = styled.p`

	font-size: 12px;
	color: #AAAAAA;

`;

const TextMessage = styled.p`

	font-size: 16px;
`;

const UserTitle = styled.p`


	font-size: 18px;
  font-weight: bold;
`;

const MessageBox = () =>{


	return(
		<MessageWrapper>
			<MessagerBox>

					<UserTitle>Selana Gomez</UserTitle>

					<TextMessage>I want Ice Cream</TextMessage>

					<MessageTimestamp>2:40 AM</MessageTimestamp>
					
			</MessagerBox>
		</MessageWrapper>
	);
}

export default MessageBox;