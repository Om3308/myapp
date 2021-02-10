import React, { Component } from 'react'

class WelcomeMsg extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn:false
        }
    }
    
    render() {

        //return this.state.isLoggedIn &&<div> welcome Aakash</div>

        
        // return(
        //     this.state.isLoggedIn ?<div> welcome User </div>:<div>
        //         welcome Guest
        //     </div>
        // )

        if(this.state.isLoggedIn){
        return (
                <h1> welcome user</h1>
        )}
        else{
            return <h1> welcome Guest</h1>
        }

        // let result;
        // if(this.state.isLoggedIn){
        //     result=<div> welcome Aakash </div>
        // }
        // else{
        //     result=<div> welcome Guest</div>
        // }
        // return <div> {result}</div>
    }
}

export default WelcomeMsg
