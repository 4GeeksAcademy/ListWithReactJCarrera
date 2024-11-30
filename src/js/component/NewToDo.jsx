import React, { useState }  from "react";

export const NewToDo = ({currentDescriptions, changeDescriptions}) => {
	const [newTodoDescription, changeNewTodoDescription] = useState("");

	function createNewTodo(newTodoDescription) {
	
		changeDescriptions([...currentDescriptions, newTodoDescription]);
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