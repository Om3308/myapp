import React, { Component } from 'react'

class BindingDemo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             msg:"hello and welcome   "
        }
        //this.clickHandler=this.clickHandler.bind(this)
    }
    clickHandler=()=>{
         console.log(this);
        this.setState({
            msg:"visit again"
        })
    }
    render() {
        return (
            <div>
                <h1> {this.state.msg} </h1>
                <button onClick={this.clickHandler.bind(this)}> change_Msg</button>
          
                {/* <button onClick={()=>this.clickHandler()}> change_Msg</button> */}
                
                {/* <button onClick={this.clickHandler}> change_Msg</button> */}
            
            
            </div>
        )
    }
}

export default BindingDemo
