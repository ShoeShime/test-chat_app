import React from 'react';
import styled from 'styled-components';
import Navbar from "./Navbar"
import moodcatkiss from "../misc/images/moodcatkiss.jpg"

const Background = styled.body`
	position: absolute;
	background-color: #ADADAD;

	height: 100%;
	width: 100%;


`;

const Top_Header = styled.body`

	background-color: #a7bcff;

	border-radius: 15px;

	height: 25%;
	width: 100%;

	display: flex;
	flex-direction: row;
	justify-content: center;

	gap: 10px;
`;

const Profile_image = styled.img`

	border-radius: 20px;
	height: 30%;


`;

const Title = styled.p`

	font-weight: bold;
	font-size: 200%;
	
`;

Profile_image.defaultProps = {
  src: moodcatkiss,
};


export const Chat_page = () =>{


	
	
	return(
			<>
				<Background>

						<Top_Header>
							<Title>Messages</Title>

							<Profile_image/>
						</Top_Header>



					<Navbar/>
				</Background>
			</>
		);
}
