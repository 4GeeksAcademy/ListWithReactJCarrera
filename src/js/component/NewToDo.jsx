import React, { useState }  from "react";

export const NewToDo = ({currentDescriptions, changeDescriptions}) => {
	const [newTodoDescription, changeNewTodoDescription] = useState("");

	function createNewTodo(newTodoDescription) {
		//                    | spread operator
		changeDescriptions([...currentDescriptions, newTodoDescription]);
		changeNewTodoDescription("");
	}

	return <>
		<input type="text" placeholder="what needs to be done?" value={newTodoDescription} onChange={(event) => changeNewTodoDescription(event.target.value)} />
		<button onClick={() => createNewTodo(newTodoDescription)}>saved all </button>
	</>

}