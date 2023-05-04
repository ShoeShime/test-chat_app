import React from "react";
import styled from "styled-components";
import CatPicture from "../misc/ThumbsUp.jpg";

const Convo = styled.div`
	background-color: #d2d2d4;

	display: flex;

	border-radius: 10px;

	margin: 10px;

	min-height: 100px;

	cursor: pointer;
	transition: all 0.2 ease-in-out;

	&:hover{
		background-color: #f5f5f5;
	}

`;

const PictureContainer = styled.div`


	display: flex;

	align-items: center;

	margin-left: 5px;
	margin-right: 5px

`;

const ProfilePic = styled.img`

	width: 60px;
	height: 60px;

	border-radius: 50%;

`;

const TextContainer = styled.div`

	width: 100%;

	margin-right: 7.5px;
	margin-left: 2.5px;

`;

const Container_1 = styled.div`

	display: flex;
	justify-content: space-between;

	align-items: center;

	margin-top: 15px;

`;

const MessageName = styled.p`

	color: #333333;


	font-size: 20px;
	font-weight: bold;

	margin: 0px;

`;

const Timestamp = styled.p`

	color: #333333;


	font-size: 15px;
	font-weight: bold;

	margin: 0px;

`;

const TextMessage = styled.p`

	color: #666666;

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

const Conversation = () =>{

	return(
		
			<Convo className="Conversation">

				<PictureContainer className="Profile_Pic">
					<ProfilePic  className="Picture" src={CatPicture}/>
				</PictureContainer>

				<TextContainer className="Inbox_Info">
					
					<Container_1>
						<MessageName className="UserName">
							Cesar
						</MessageName>
						
						<Timestamp className="TimeStamp">
							11:00 AM
						</Timestamp>
					</Container_1>


				</TextContainer>

			</Convo>
	
	);
}

export default Conversation;