import React, {useEffect , useState} from 'react';
import axios from 'axios';
import Movie from './Movie';
import { config } from 'dotenv';

config();

const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_API_KEY}&page1`
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?&api_key=${process.env.REACT_APP_API_KEY}&query=`


const App = () => {

    const [movies , setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

     useEffect(() => {
        searchMovies(FEATURED_API);

    }, []);

    const searchMovies = async (API) => {
        setLoading(true) 
        const response = await axios(API);
        setLoading(false)
        if(response.data.results.length > 0){
            setMovies(response.data.results);
        }
        if(response.data.results.length === 0){
            setError(true)
        } 
      };
    
        
    const handleSubmit = (e) => {
        e.preventDefault();
        if(searchTerm){
            searchMovies(SEARCH_API + searchTerm);
            setSearchTerm('');
        }
    }

    const handleOnChange = (e) => {
        setSearchTerm(e.target.value);

    }

    return(
        <div className="root">
            <header>
                <form onSubmit={handleSubmit}>
                    <input 
                    className="search"
                    type="search"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleOnChange}
                    />
                </form>
            </header>
            <div className="movie-container">
            {
                loading ? 
                <div style={{"marginTop":"20px"}}>
                    <div className="ui active dimmer">
                        <div className="ui text loader">Loading</div>
                    </div>
                </div> 
                :
                error ? 
                <div className="ui red message" style={{"marginTop":"10px"}}>Sorry No Movies Found With Your Search Term</div> 
                :  
                movies.length > 0 && movies.map( (movie) => {
                        return <Movie key={movie.id} movie={movie}/>
                })
            }
            </div>
        </div>
    );
}

export default App