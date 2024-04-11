
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import CSS file for styling

function Header() {
    const [searchQuery, setSearchQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const url = `https://api.themoviedb.org/3/search/movie?api_key=95515296317d900f7ed06b90323487e8&language=en-US&query=${searchQuery}&page=1`;
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log(data.results); // Log the fetched movie data
                setMovies(data.results);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };

        fetchMovies();
    }, [searchQuery]);

    useEffect(() => {
        // Update filteredMovies when movies state changes
        setFilteredMovies(movies);
    }, [movies]);

    return (
        <header className="header">
            <h1 className="heading"><Link to="/">MovieDB</Link></h1>
            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-item"><Link to="/popular" className="nav-link">Popular</Link></li>
                    <li className="nav-item"><Link to="/top-rated" className="nav-link">Top Rated</Link></li>
                    <li className="nav-item"><Link to="/upcoming" className="nav-link">Upcoming</Link></li>
                </ul>
            </nav>
            <div className="search-container">
                <input 
                    type="text" 
                    className="search-input" 
                    placeholder="Search..." 
                    value={searchQuery} 
                    onChange={(e) => setSearchQuery(e.target.value)} 
                />
                <button className="search-button">Search</button>
            </div>
        </header>
    );
}

export default Header;










// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import './header.css'; // Import CSS file for styling

// function Header() {
//     const [searchQuery, setSearchQuery] = useState('');
//     const [movies, setMovies] = useState([]);
//     const [filteredMovies, setFilteredMovies] = useState([]);

//     useEffect(() => {
//         const fetchMovies = async () => {
//             try {
//                 const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=95515296317d900f7ed06b90323487e8&language=en-US&query=${searchQuery}&page=1`);
//                 console.log(response);
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 const data = await response.json();
//                 setMovies(data.results);
//             } catch (error) {
//                 console.error('Error fetching movies:', error);
//             }
//         };

//         fetchMovies();
//     }, [searchQuery]);

//     useEffect(() => {
//         const filtered = movies.filter(movie =>
//             movie.title.toLowerCase().includes(searchQuery.toLowerCase())
//         );
//         setFilteredMovies(filtered);
//     }, [searchQuery, movies]);

//     return (
//         <header className="header">
//             <h1 className="heading"><Link to="/">MovieDB</Link></h1>
//             <nav className="nav">
//                 <ul className="nav-list">
//                     <li className="nav-item"><Link to="/popular" className="nav-link">Popular</Link></li>
//                     <li className="nav-item"><Link to="/top-rated" className="nav-link">Top Rated</Link></li>
//                     <li className="nav-item"><Link to="/upcoming" className="nav-link">Upcoming</Link></li>
//                 </ul>
//             </nav>
//             <div className="search-container">
//                 <input 
//                     type="text" 
//                     className="search-input" 
//                     placeholder="Search..." 
//                     value={searchQuery} 
//                     onChange={(e) => setSearchQuery(e.target.value)} 
//                 />
//                 <button className="search-button">Search</button>
//             </div>
//         </header>
//     );
// }

// export default Header;



// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import './header.css'; // Import CSS file for styling

// function Header() {
//     const [searchQuery, setSearchQuery] = useState('');
//     const [movies, setMovies] = useState([]);
//     const [filteredMovies, setFilteredMovies] = useState([]);

//     useEffect(() => {
//         const fetchMovies = async () => {
//             try {
//                 const response = await fetch("https://api.themoviedb.org/3/search/movie?api_key=95515296317d900f7ed06b90323487e8&language=en-US&query=searchQuery&page=1");
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 const data = await response.json();
//                 setMovies(data.results);
//             } catch (error) {
//                 console.error('Error fetching movies:', error);
//             }
//         };

//         fetchMovies();
//     }, []);

//     useEffect(() => {
        
//         if (movies && movies.length > 0) {
//             const filtered = movies.filter(movie =>
//                 movie.title.toLowerCase().includes(searchQuery.toLowerCase())
//             );
//             setFilteredMovies(filtered);
//         }
//     }, [searchQuery, movies]);

//     return (
//         <header className="header">
//             <h1 className="heading"><Link to="/">MovieDB</Link></h1>
//             <nav className="nav">
//                 <ul className="nav-list">
//                     <li className="nav-item"><Link to="/popular" className="nav-link">Popular</Link></li>
//                     <li className="nav-item"><Link to="/top-rated" className="nav-link">Top Rated</Link></li>
//                     <li className="nav-item"><Link to="/upcoming" className="nav-link">Upcoming</Link></li>
//                 </ul>
//             </nav>
//             <div className="search-container">
//                 <input 
//                     type="text" 
//                     className="search-input" 
//                     placeholder="Search..." 
//                     value={searchQuery} 
//                     onChange={(e) => setSearchQuery(e.target.value)} 
//                 />
//                 <button className="search-button">Search</button>
//             </div>
//         </header>
//     );
// }

// export default Header;




// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import './header.css'; // Import CSS file for styling

// function Header() {
//     const [searchQuery, setSearchQuery] = useState('');
//     const [movies, setMovies] = useState([]);
//     const [filteredMovies, setFilteredMovies] = useState([]);

//     useEffect(() => {
//         const fetchMovies = async () => {
//             try {
//                 const response = await fetch("https://api.themoviedb.org/3/movie/359410?api_key=95515296317d900f7ed06b90323487e8&language&language=en-US");
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 const data = await response.json();
//                 setMovies(data.results);
//             } catch (error) {
//                 console.error('Error fetching movies:', error);
//             }
//         };

//         fetchMovies();
//     }, []);

//     useEffect(() => {
//         // Filter movies based on search query
//         const filtered = movies.filter(movie =>
//             movie.title.toLowerCase().includes(searchQuery.toLowerCase())
//         );
//         setFilteredMovies(filtered);
//     }, [searchQuery, movies]);

//     return (
//         <header className="header">
//             <h1 className="heading"><Link to="/">MovieDB</Link></h1>
//             <nav className="nav">
//                 <ul className="nav-list">
//                     <li className="nav-item"><Link to="/popular" className="nav-link">Popular</Link></li>
//                     <li className="nav-item"><Link to="/top-rated" className="nav-link">Top Rated</Link></li>
//                     <li className="nav-item"><Link to="/upcoming" className="nav-link">Upcoming</Link></li>
//                 </ul>
//             </nav>
//             <div className="search-container">
//                 <input 
//                     type="text" 
//                     className="search-input" 
//                     placeholder="Search..." 
//                     value={searchQuery} 
//                     onChange={(e) => setSearchQuery(e.target.value)} 
//                 />
//                 <button className="search-button">Search</button>
//             </div>
//         </header>
//     );
// }

// export default Header;




// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import './header.css'; // Import CSS file for styling

// function Header() {

//     const [searchQuery, setSearchQuery] = useState('');
//     const [movies, setMovies] = useState([]);
//     const [filteredMovies, setFilteredMovies] = useState([]);

//     useEffect(() => {
//         // Filter movies based on search query
//         const filtered = movies.filter(movie =>
//             movie.title.toLowerCase().includes(searchQuery.toLowerCase())
//         );
//         setFilteredMovies(filtered);
//     }, [searchQuery, movies]);
//     return (
//         <header className="header">
//             <h1 className="heading"><Link to="/">MovieDB</Link></h1>
//             <nav className="nav">
//                 <ul className="nav-list">
//                     <li className="nav-item"><Link to="/popular" className="nav-link">Popular</Link></li>
//                     <li className="nav-item"><Link to="/top-rated" className="nav-link">Top Rated</Link></li>
//                     <li className="nav-item"><Link to="/upcoming" className="nav-link">Upcoming</Link></li>
//                 </ul>
//             </nav>
//             <div className="search-container">
//                 {/* <input type="text" className="search-input" placeholder="Search..." />
//                 <button className="search-button">Search</button> */}

// <input 
//                     type="text" 
//                     className="search-input" 
//                     placeholder="Search..." 
//                     value={searchQuery} 
//                     onChange={(e) => setSearchQuery(e.target.value)} 
//                 />
//                 <button className="search-button">Search</button>

//             </div>
//         </header>
//     );
// }

// export default Header;
