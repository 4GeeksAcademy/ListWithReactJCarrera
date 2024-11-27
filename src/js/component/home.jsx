import React from "react";

//include images into your bundle
import { ToDoList } from "./ToDoList";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Making a list 📝</h1>
	        
			<div>
				<ToDoList />
				
			</div>
		</div>
	);
};

export default Home;
