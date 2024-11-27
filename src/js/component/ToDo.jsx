import React from "react";

export const ToDo = ({description, currentDescriptions, setCurrentDescriptions, index}) => {
	
	
	
	return <div>
		{description}
		<button onClick={()=>setCurrentDescriptions(currentDescriptions.filter((item,indice)=>indice != index))}>X</button>
	</div>;
}
