import React, { useState }  from "react";
import { TodoAPI } from "../tools/TodoAPI";

export const NewToDo = ({currentDescriptions, changeDescriptions}) => {
	const [newTodoDescription, changeNewTodoDescription] = useState("");

	async function createNewTodo(newTodoDescription) {
	
		const todoCreated = await TodoAPI.post({url: "/todos/jesscp07", params: {
			"label": newTodoDescription,
			"is_done": false
		  }})
		changeDescriptions([...currentDescriptions, todoCreated]);
		changeNewTodoDescription("");
	}

	return <div>
		<input type="text" className="form-control" placeholder="what needs to be done?" value={newTodoDescription} onChange={(event) => changeNewTodoDescription(event.target.value)} 
		onKeyDown={ (event)=>{
          console.log (event)
		  if (event.key == "Enter" && newTodoDescription != ""){
		  createNewTodo(newTodoDescription)
		  }
		}}
		/>
	
	</div>

}