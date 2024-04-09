import {useState, useEffect} from 'react';

import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard.jsx';


//505bf39a
const API_URL  = 'http://www.omdbapi.com?apikey=505bf39a';


const movie1 = { //static data just to render out something for JSX code
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjA1Nzk0OTM2OF5BMl5BanBnXkFtZTgwNjU2NjEwMDE@._V1_SX300.jpg",
    "Title": "Her",
    "Type": "movie",
    "Year": "2013",
    "imdbID": "tt1798709"

}



const App = () => {
    // The below is a new state. Equal to the call of the useState hook
     // gives access to the setMovies setter function in searchMovies code
    const[movies, setMovies] = useState([]); // defualt value of useState is an emtpy array
   
    const [searchTerm, setSearchTerm ] = useState(''); //another state for searching functionality. empty string as search term is initially empty

    //listener function
    const searchMovies = async (title) => {
        //template string in fetch
        const response = await fetch(`${API_URL}&s=${title}`); 
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(()=>{
        searchMovies('Her');

    }, []);

    return (
        <div className = 'app'>
            <h1>Justin's MovieLand</h1>
            <div className = "search">
                <input
                    placeholder = "Search for movies"
                    value = {searchTerm} // statically set value string
                    onChange = {(e) => setSearchTerm(e.target.value)} //callback function for calling API
                />

                
                <img //self closing image tag
                    src = {SearchIcon} // source image
                    alt = "search"   // every image needs an alt tag
                    onClick = {() => searchMovies(searchTerm)} //we make the image a button with a callback function
                />
            </div>
            
            {movies?.length>0 // if movies length is greater then zero
                ? (  // then we load our movie card.
                    <div className = "container"> 

                        {movies.map((movie)=> ( // dynamic block of code to map over movies array fetched with an api
                            <MovieCard movie = {movie}/> //render moviecard component (passing movie prop) iteration of the map
                        ))} 
                    </div>
                ) : ( // else we render this
                    <div className = "empty">
                        <h2>No movies found</h2>
                    </div>    
                )
            }
        </div>
    )
}

export default App;