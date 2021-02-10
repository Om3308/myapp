import React from 'react'

function MovieDetails(props) {
    // console.log(props)
    const{name,director}=props;
    return (
        <div>
            movie name is {name} and it is directed by {director}
        </div>
    )
}

export default MovieDetails
