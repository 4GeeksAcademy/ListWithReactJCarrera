import React, { useEffect, useState } from "react";
import { ToDo } from "./ToDo";
import { NewToDo } from "./NewToDo";
import { TodoAPI } from "../tools/TodoAPI";


export const ToDoList = () => {

    const [currentDescriptions, setCurrentDescriptions] = useState([]);

	let initialDescriptions = []; 

	useEffect(() => {
		async function fetchData() {
			const user_name = "jesscp07";

			// cargar la lista de todos
			const user = await TodoAPI.get({
				url: `/users/${user_name}`,
			})

			const todos = user.todos;

			// actualizar el estado para mostrar mis datos
			setCurrentDescriptions(todos);
			initialDescriptions = todos;
			console.log(initialDescriptions)

		}
		console.log("Trying to load")
		fetchData();
	}, []);
	  
	return <>
		<NewToDo  changeDescriptions={setCurrentDescriptions} currentDescriptions={currentDescriptions} />
		<ul className="list-group">
			{currentDescriptions.map((todo, index) => <ToDo key={todo.id} index={index} id={todo.id} description={todo.label} setCurrentDescriptions={setCurrentDescriptions} currentDescriptions={currentDescriptions} />)}
		</ul>
		{currentDescriptions.length > 0 && <div> currently there are {currentDescriptions.length} elemento{currentDescriptions.length > 1 ? "s": ""}</div>}
		{currentDescriptions.length === 0 && <div> Currently There are no Items</div>}
	</>;
	
}