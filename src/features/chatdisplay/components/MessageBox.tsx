import React from "react";
import styled from "styled-components";

const MessageWrapper = styled.div`

`;

const MessagerBox = styled.div`



`;

const MessageTimestamp = styled.p`


`;

const TextMessage = styled.p`

`;

const UserTitle = styled.p`



`;

const MessageBox = () =>{


	return(
		<MessagerBox>


				<UserTitle>This is a message box</UserTitle>

				<TextMessage>I want Ice Cream</TextMessage>

				<MessageTimestamp>2:40 AM</MessageTimestamp>
				

		</MessagerBox>
	);
}

export default MessageBox;