import React, { useState } from "react";
// import Styles from './styles';
// import Title from "./title";
// import Todos from "./todos";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const[ newEntry, setNewEntry ] = useState ('');
	const[ taskList, setNewList ] = useState ([]);

	function handleSubmit(event) {
		event.preventDefault ();
		
	}
console.log(taskList);

	return (
		<div className="container w-50">
			<h1>Todos</h1>
			<form onSubmit={handleSubmit}>
				<div className="mb-3">
					<label htmlFor="exampleInputEmail" className="from-label"></label>
					<input 
						placeholder="What needs to be done?"
						onChange={(event) => setNewEntry(event.target.value)}
						onKeyDown={(event)=>{
							if (event.key==='Enter')
								{
									setNewList (taskList.concat([newEntry]))
									setNewEntry ('')
								}
						} }
						value={newEntry}
					/>
				</div>
			
			</form>
			<ul className="todo">
				{
					taskList.map((task, index)=>{
						return(

							<li key={index}>{task}{' '}<i onClick={()=>{setNewList(
								taskList.filter((t, currentIndex)=> {return(
									index != currentIndex
								)})
							)} } className="fa-solid fa-trash"></i> </li>
						)
					})
				}

			</ul>
		</div>
	
		);
};

export default Home;
