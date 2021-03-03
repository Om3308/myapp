import React, { Component } from 'react'
import axios from 'axios'

class PostData extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userId:'',
             title:'',
             body:''
        }
    }
    clickHandler=event=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    submitData=event=>{
        event.preventDefault()
        // console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state).then(
            res=>{
                console.log(res)
            }
        ).catch(error=>{
            console.log(error)
        })
    }
    render() {
        const {userId,title,body}=this.state
        return (
            <div>
                <form onSubmit={this.submitData}>
                    <div>
                        <label> userId</label>
                        <input type="text" value={userId} name="userId" onChange={this.clickHandler}/>
                    </div>
                    <div>
                        <label> title</label>
                        <input type="text" value={title} name="title" onChange={this.clickHandler}/>
                    </div> <div>
                        <label> body</label>
                        <input type="text" value={body} name="body" onChange={this.clickHandler}/>
                    </div>
                    <div>
                        <button type="submit"> submit </button>
                    </div>

                </form>
            </div>
        )
    }
}

export default PostData
