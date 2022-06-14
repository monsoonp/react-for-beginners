import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home(){
    const [lading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async() =>{
      const response = await fetch(' https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year');
      const json = await response.json();
      setMovies(json.data.movies);
      setLoading(false);
    }
  
    useEffect(()=>{
      getMovies();
    }, [])
  
    // console.log(movies);
  
    return (
      <div>
        {lading ? <h1>Lading...</h1> : 
          <div>
            {movies.map((movie) => 
              <Movie key={movie.id} id={movie.id} title={movie.title} coverImg={movie.medium_cover_image} summary={movie.summary} genres={movie.genres}/>
            )}
          </div>
        }
      </div>
    )
}

export default Home;