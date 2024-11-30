import React from "react";

//include images into your bundle
import { ToDoList } from "./ToDoList";

//create your first component
const Home = () => {
	return (
		<div className="w-100">
			<div className="card card-body w-50 m-auto">
				
				<h1 className="text-center mt-5">Making a list 📝</h1>
				
				<div>
					<ToDoList />
				</div>
			</div>
		</div>
		
	);
};

export default Home;
