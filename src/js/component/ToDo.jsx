import React from "react";
import { ToDoList } from "./ToDoList";
import { TodoAPI } from "../tools/TodoAPI";

export const ToDo = ({  id, description, currentDescriptions, setCurrentDescriptions, index}) => {
	
	async function deleteTodo(id) {
		console.log({id});
		setCurrentDescriptions(currentDescriptions.filter((item,indice)=>indice != index));
		const todoDeleted = await TodoAPI.delete({url: `/todos/${id}`});

	}
	
	return <li className="d-flex justify-content-between list-group-item">
		{description}
		<button className="boton-X btn btn-success" onClick={async () => {await deleteTodo(id)} }>X</button>
	</li>;
}
