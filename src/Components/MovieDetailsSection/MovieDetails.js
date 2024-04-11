//MovieDetails.js

// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { ClockLoader } from 'react-spinners';
// import './moviedetails.css'; // Import CSS file for styling

// function MovieDetails() {
//     const { id } = useParams();
//     const [movie, setMovie] = useState(null);
//     const [cast, setCast] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchMovieDetails = async () => {
//             try {
//                 const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=YOUR_API_KEY&language=en-US`);
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 const data = await response.json();
//                 setMovie(data);

//                 const castResponse = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=YOUR_API_KEY`);
//                 if (!castResponse.ok) {
//                     throw new Error('Network response for cast was not ok');
//                 }
//                 const castData = await castResponse.json();
//                 setCast(castData.cast);
//                 setLoading(false); 
//             } catch (error) {
//                 console.error('Error fetching movie details:', error);
//             }
//         };

//         fetchMovieDetails();
//     }, [id]);

//     if (loading) {
//         return <ClockLoader color="#36d7b7" />; 
//     }

//     if (!movie) {
//         return <div>Error fetching movie details</div>;
//     }

//     return (
//         <div className="movie-details-container">
//             <h1>{movie.title}</h1>
//             <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
//             <div className="backdrop-image" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})` }}></div>
//             <p>{movie.overview}</p>
//             <p>Release Date: {movie.release_date}</p>
//             <h2>Cast</h2>
//             <ul>
//                 {cast.map(actor => (
//                     <li key={actor.id}>{actor.name} as {actor.character}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default MovieDetails;



 // MovieDetails.js
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import './moviedetails.css';

// function MovieDetails() {
//     const { id } = useParams();
//     const [movie, setMovie] = useState(null);

//     useEffect(() => {
//         const fetchMovieDetails = async () => {
//             try {
//                 const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=95515296317d900f7ed06b90323487e8&language=en-US`);
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 const data = await response.json();
//                 setMovie(data);
//             } catch (error) {
//                 console.error('Error fetching movie details:', error);
//             }
//         };

//         fetchMovieDetails();
//     }, [id]);

//     if (!movie) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div className="backdrop-image" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})` }}>
//         <div className='details-view'>
            
//             <img className="images" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
//             <div className='details-view1'>
//             <h1>{movie.title}</h1>
//             <p>Rating: {movie.vote_average}</p>
            
//             <p>Release Date: {movie.release_date}</p>
            
//         </div>
//         </div>
        
//             <h1>Overview</h1>
//             <p>{movie.overview}</p>
        
//         </div>
//     );
// }

// export default MovieDetails;
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './MovieDetails.css';

function MovieDetails() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [cast, setCast] = useState([]);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=95515296317d900f7ed06b90323487e8&language=en-US`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setMovie(data);

                const castResponse = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=95515296317d900f7ed06b90323487e8&language=en-US`);
                if (!castResponse.ok) {
                    throw new Error('Network response for cast was not ok');
                }
                const castData = await castResponse.json();
                setCast(castData.cast);
            } catch (error) {
                console.error('Error fetching movie details:', error);
            }
        };

        fetchMovieDetails();
    }, [id]);

    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <div className="backdrop-image  " style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})` }}>
            <div className='details-view'>
                <img className="images" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <div className='details-view1'>
                    <h1>{movie.title}</h1>
                    <p>Rating: {movie.vote_average}</p>
                    <p>Duration: {movie.runtime}mins</p><p>{movie.genres.name}</p>
                    <p>Release Date: {movie.release_date}</p>
                </div>
            </div>
            <h1 className="overview">Overview</h1>
            <p className="overview">{movie.overview}</p>

            <h2 className="cast">Cast</h2>
            <div className="cast-container">
                {cast.map(actor => (
                    <div key={actor.id} className="actor">
                        <img className="image-con" src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt={actor.name} />
                        <p>{actor.name}</p>
                        <p>Character: {actor.character}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MovieDetails;
