import SearchMovies from '../search/searchMovies';
import MovieList from '../search/movieList';

const Home: React.FC = () => {
  return (
   <div data-testid="home" className="home background-gradient"> 
    
      <MovieList
         listTitle="Now Trending"
         url="http://localhost:5000/film/trending/day"
         number={10}
      />
    </div>
    
  );
};

//Removed this code from before MovieList call
//  <SearchMovies/>

export default Home;
