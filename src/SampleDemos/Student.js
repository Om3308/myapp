
import React,{Component} from "react";
class Student extends Component 
{
    state={
        name:"Omkar",
        address:"Pune"

    }
    render( ){
    return <h3>Name is  {this.state.name} And Address is {this.props.add}</h3>
    }
}
export default Student;