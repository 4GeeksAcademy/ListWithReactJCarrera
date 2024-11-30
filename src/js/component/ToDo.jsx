import React from "react";

export const ToDo = ({description, currentDescriptions, setCurrentDescriptions, index}) => {
	
	
	
	return <li className="d-flex justify-content-between list-group-item">
		{description}
		<button className="boton-X btn btn-success"  onMouseOut={()=>setCurrentDescriptions(currentDescriptions.filter((item,indice)=>indice != index))}>X</button>
	</li>;
}
