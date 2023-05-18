import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from '../../services/FetchData';
import { getImage } from '../../services/GetImageLink';
import { List, ListItem, Image, Actor, Character } from './Cast.styled';

const Cast = () => {
    const [cast, setCast] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetchCast(id).then(setCast);
    }, [id]);

    return (
        <List>
            {cast.map(({ name, id, profile_path, character }) => (
                <ListItem key={id}>
                    <Image src={getImage(profile_path)} alt={name} />
                    <Actor>{name}</Actor>
                    <Character>&#40; {character} &#41;</Character>
                </ListItem>
            ))}
        </List>
    );
};

export default Cast;