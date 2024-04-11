
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ClockLoader } from 'react-spinners';
import './Home.css';

function Home() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=95515296317d900f7ed06b90323487e8&language=en-US&page=11");
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setMovies(data.results);
                setLoading(false); 
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    if (loading) {
        return <ClockLoader color="#36d7b7" />; 
    }

    
    return (
        <div className="movie-list-container">
           
            <div className="movie-grid">
                {movies.map(movie => (
                    <Link key={movie.id} to={`/movie/${movie.id}`} className="movie-card-link">
                        <div className="movie-card">
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                            <div className="movie-details">
                                <h3>{movie.title}</h3>
                                <p>Rating: {movie.vote_average}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Home;


// import React, { useState, useEffect } from 'react';
// import './home.css';
// function Home() {
//     const [movies, setMovies] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=95515296317d900f7ed06b90323487e8&language=en-US&page=11");
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 const data = await response.json();
//                 setMovies(data.results);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };

//         fetchData();
//     }, []);

//     return (
//         <div className="movie-list-container">
//         <h2>Popular Movies</h2>
//         <div className="movie-grid">
//             {movies.map(movie => (
//                 <div key={movie.id} className="movie-card">
//                     <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
//                     <div className="movie-details">
//                         <h3>{movie.title}</h3>
//                         <p>Rating: {movie.vote_average}</p>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     </div>
//     );
// }

// export default Home;
