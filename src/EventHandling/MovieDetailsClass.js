import React, { Component } from 'react'

class MovieDetailsClass extends Component {
    render() {
        const{name,director}=this.props;
        return (
            <div>
           
         <h1>  movie name is {name} and it is directed by 
         {director} </h1>
            </div>
        )
    }
}

export default MovieDetailsClass
