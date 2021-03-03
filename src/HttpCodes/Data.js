import React, { Component } from 'react'
import axios from 'axios'

class Data extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             emp:[],
             errormsg:''
        }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts').then(response=>{
 console.log(response)
this.setState({
    emp:response.data
})
        }).catch(error=>{
            // console.log(error)
            this.setState({
                errormsg:'error while fetching the data'
            })

        })
    }
    render() {
        const {emp,errormsg}=this.state

        return (
            <div>
                 <h3> list of Items</h3>
                <table border="1" >
                <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>      
                        </tr>
                </thead>
                <tbody>
                {
                    emp.length? emp.map(e=>{
                        return(
                           <tr key={e.id} >
                               <td>{e.id}</td>
                               <td>{e.title}</td>  
                           </tr>
                        )
                        }):null
                }
                {errormsg?<div>{errormsg} </div>:null}
                </tbody>
                </table>
            </div>
        )
    }
}

export default Data
