import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, image, title, summary, genres }) {
    return (
        <div>
            <img src={image} />
            <h2>
                영화 제목 : <Link to ={`/movie/${id}`}>{title}</Link>
            </h2>
            <p>줄거리 요약: {summary}</p>
            <ul>
                <h3>장르</h3>
                {genres.map((g) => (
                    <li key={g}>{g}</li>
                ))}
            </ul>
            <hr />
        </div>
    );
}
Movie.propTypes={
    id : PropTypes.number.isRequired,
    image : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired,
} 
export default Movie;