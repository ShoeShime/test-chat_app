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

	flex-grow: 1;


`;

const MessageName = styled.h2`


`;

const Timestamp = styled.p`

`;

const TextMessage = styled.p`

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
						Cesar Magana
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