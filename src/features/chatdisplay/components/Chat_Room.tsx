import React from "react";
import {ButtonSubmit} from "./Button-Submit"


export function Chat_Room(){


	return(<>
		<div>
			<p>Message thing is here</p>
		</div>

		<form>
			<input className="Message that is being submitted"/>

			<ButtonSubmit/>
		</form>
	</>
	)
}