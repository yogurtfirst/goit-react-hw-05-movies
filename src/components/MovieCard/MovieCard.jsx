import { useEffect, useState, Suspense } from 'react';
import { useParams, Outlet, Link } from 'react-router-dom';
import { fetchMovieDetails } from '../../services/FetchData';
import { getImage } from '../../services/GetImageLink';
import { AdditionalInfo, Info, Container, List, ListItem } from './MovieCard.styled';

const MovieCard = () => {
    const [movieDetails, setMovieDetails] = useState({});
    const { id } = useParams();
    const { poster_path, title, vote_average, overview, genres } = movieDetails;

    useEffect(() => {
        fetchMovieDetails(id).then(setMovieDetails);
    }, [id]);

    const getGenres = () => {
        if (genres) return genres.map(el => el.name).join(', ');
    };

    return (
        <Container>
            <div style={{ display: 'flex' }}>
                <img src={getImage(poster_path)} alt="poster" width={240} />
                <Info>
                    <h2>{title}</h2>
                    <p>User score: {vote_average}</p>
                    <h3>Overview</h3>
                    <p>{overview}</p>
                    <h3>Genres</h3>
                    <p>{getGenres()}</p>
                </Info>
            </div>
            <AdditionalInfo>
                <p>Additional information</p>
                <List>
                    <ListItem>
                        <Link to="cast">Cast</Link>
                    </ListItem>
                    <ListItem>
                        <Link to="reviews">Reviews</Link>
                    </ListItem>
                </List>
            </AdditionalInfo>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </Container>
    );
};

export default MovieCard;