import { useState, useEffect } from 'react';
import { useLocation, useSearchParams, Link } from 'react-router-dom';
import { fetchMoviesByQuery } from '../../services/FetchData';
import { getImage } from '../../services/GetImageLink';
import { Button, Input, Container } from './SearchBar.styled';
import { List, ListItem, Image, Title, Rate } from '../TrendingMoviesList/TrendingMoviesList.styled';

const SearchBar = () => {
    const [movies, setMovies] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();

    useEffect(() => {
        if (!searchParams) return;

        setInputValue(searchParams.get('query') ?? '');

        async function getMovieList() {
            const movieList = await fetchMoviesByQuery(searchParams.get('query'));
            setMovies(movieList);
        }

        getMovieList();
    }, [searchParams]);

    const handleSubmit = e => {
        e.preventDefault();
        const query = inputValue !== '' ? { query: inputValue } : {};
        setSearchParams(query);
        fetchMoviesByQuery(inputValue)
            .then(setMovies)
            .catch(console.error);
    };

    const handleChange = ({ target: { value } }) => {
        setInputValue(value);
    };

    return (
        <>
            <Container>
                <form onSubmit={handleSubmit}>
                    <Input
                        name="query"
                        type="text"
                        value={inputValue}
                        onChange={handleChange}
                    />
                    <Button type="sumbit">Search</Button>
                </form>
            </Container>
            
            <List>
                {movies.map(({ id, title, poster_path, vote_average }) => (
                    <ListItem key={id}>
                        <Link to={`${id}`} state={{ from: location }}>
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

export default SearchBar;