

import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Header from './Components/HeaderSection/Header';
import Home from './Components/HomeSection/Home';
import TopRated from './Components/TopRatedSection/TopRated';
import UpcomingMovies from './Components/UpcomingMoviesSection/UpcomingMovies';
import MovieDetails from './Components/MovieDetailsSection/MovieDetails'
import './App.css';

function App() {

  
  return (
    <Router>
        <div>
            <Header />
            <Routes >
                <Route path="/popular" element={<Home />} />
                <Route path="/top-rated" element={<TopRated />} />
                <Route path="/upcoming" element={<UpcomingMovies />} />
                <Route path="/movie/:id" element={<MovieDetails />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    </Router>
  );
}

export default App;