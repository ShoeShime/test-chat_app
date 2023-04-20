import React, {useState} from "react";
import styled from "styled-components";
import Message from "./Message";
import Messages from "./Messages";




const MessageSender = ()=>{
	const [messages, setMessages] = useState([]);

	const handleMessageSubmit = (message: string) =>{
		//console.log(message + "this is being displayed")

		

	};

	return(
		<>
			<Messages messages={messages}/>

			<Message onMessageSubmit={handleMessageSubmit}/>
		</>
	);
}

export default MessageSender;