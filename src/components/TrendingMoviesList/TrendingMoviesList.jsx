import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchTrendMovies } from '../../services/FetchData';
import { getImage } from '../../services/GetImageLink';
import { List, ListItem, Image, Title, Rate } from './TrendingMoviesList.styled';

const TrendingMoviesList = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchTrendMovies().then(response => setMovies(response));
  }, []);

  return (
    <>
      <List>
        {movies.map(({ id, title, poster_path, vote_average }) => (
          <ListItem key={id}>
            <Link to={`movies/${id}`} state={{ from: location }}>
              <Image src={getImage(poster_path)} alt="poster"/>
              <Title>{title}</Title>
              <Rate>{vote_average}</Rate>
            </Link>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default TrendingMoviesList;