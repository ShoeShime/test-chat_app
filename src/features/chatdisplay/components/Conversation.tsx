import React from "react";
import styled from "styled-components";
import CatPicture from "../misc/ThumbsUp.jpg";

const Convo = styled.div`

	display: flex;

	align-items: center;

	padding: 16px;

`;

const PictureContainer = styled.div`
	
	flex-basis: 60px;
	margin-right: 16px;

`;

const ProfilePic = styled.img`

	width: 60px;
	height: 60px;

	border-radius: 50%;

`;

const TextContainer = styled.div`

	display: flex;
	flex-wrap: wrap;

`;

const MessageName = styled.h2`

	color: #333333;

	flex-basis: 50%;
	flex-grow: 1;

	font-size: 20px;
	font-weight: bold;

`;

const Timestamp = styled.p`

	color: #333333;

	flex-basis: 50%;
	flex-grow: 1;


	font-size: 16px;
	font-weight: bold;

`;

const TextMessage = styled.p`

	color: #666666;

	flex-basis 100%;
	flex-grow: 1;

	font-size: 14px;

`;

interface Conversation{
	id: number,
	profilePic: string,
	name: string,
	lastmessage: string,
	timestamp: Date,
	isSeen: boolean
}

const conversations: Conversation[] = [
	{
		id: 1,
		profilePic: CatPicture,
		name: "Cesar Magana",
		lastmessage: "I want icecream",
		timestamp: new Date(),
		isSeen: true
	}
];

const Conversation = () =>{

	return(
		
			<Convo>

				<PictureContainer>
					<ProfilePic  className="profile-pic" src={CatPicture}/>
				</PictureContainer>

				<TextContainer>

						<MessageName>
							Cesar
						</MessageName>
						
						<Timestamp>
							11:00 AM
						</Timestamp>
					
				
						<TextMessage>
							I want IceCream
						</TextMessage>
					

				</TextContainer>

			</Convo>
	
	);
}

export default Conversation;