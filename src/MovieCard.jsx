// We use a .jsx file here because React likes jsx extensions for the creations of components.
// The technically there is no difference between a .js and a .jsx file

import React from 'react';

/* the immediatly below line within the purple curly braces contains props.
React props are essentially arguments passed into React components via HTML attributes.
They are thus similar to function arguments and attributes in HTML. Props have the same 
syntax as html attributes.
*/
const MovieCard = ({movie}) =>{ // convention here is to name the component name the same as filename
   return(
        <div className  = "movie">
            <div>   
                <p>{movie.Year}</p>    
            </div>
        
            <div>  
                <img src = {movie.Poster !== 'N/A' ? movie.Poster : 'https://via.Placeholder.com/400'} alt = {movie.Title}></img>
            </div>
                    
            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>
        </div>
   );    
}

export default MovieCard;

