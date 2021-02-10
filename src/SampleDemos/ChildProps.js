import React from "react";
class Parent extends React.Component{ 
	render(){ 
		return( 
				<div> 
					<h1>Parent Component</h1> 
					<Child name="Ganesh" location = "Nashik"/> 
				</div> 
			); 
	} 
}  
class Child extends React.Component{ 
	render(){ 
		return( 
				<div>
					<h2>{this.props.name}</h2> 
					<h3>Child Component</h3> 
					<h3>Location: {this.props.location}</h3>
				</div> 
				
			); 
	} 
} 
export default Parent;