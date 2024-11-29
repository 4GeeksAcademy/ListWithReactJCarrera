import React, { useState } from "react";
import { ToDo } from "./ToDo";
import { NewToDo } from "./NewToDo";


export const ToDoList = () => {

    const [currentDescriptions, setCurrentDescriptions] = useState([]);

	return <>
		<NewToDo  changeDescriptions={setCurrentDescriptions} currentDescriptions={currentDescriptions} />
		<ul className="list-group">
			{currentDescriptions.map((description, index) => <ToDo key={index} index={index} description={description} setCurrentDescriptions={setCurrentDescriptions} currentDescriptions={currentDescriptions} />)}
		</ul>
		{currentDescriptions.length > 0 && <div> currently there are {currentDescriptions.length} elemento{currentDescriptions.length > 1 ? "s": ""}</div>}
		{currentDescriptions.length === 0 && <div> Currently There are no Items</div>}
	    </>;
	
}