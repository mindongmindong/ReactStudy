import Movie from "../components/Movie";
import {useState,useEffect} from "react";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        const response = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year");
        const json = await response.json();
        setMovies(json.data.movies);
        setLoading(false);
        console.log({ movies });
    }
    useEffect(() => {
        getMovies();
    }, []);
    return (
        <div>
            {loading ? <h1>loading...</h1> :
                movies.map((movie) =>
                    <Movie
                        key={movie.id}
                        id = {movie.id}
                        image={movie.medium_cover_image}
                        title={movie.title}
                        summary={movie.summary}
                        genres={movie.genres} />
                )}
        </div>
    );

}
export default Home; 