import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from '../../services/FetchData';
import { List, ListItem } from './Reviews.styled';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetchReviews(id).then(response => {
            if (response.length === 0) {
                setReviews(null)
            }
            else {
                setReviews(response)
            };
        });
    }, [id]);

    return (
        <>
            {!reviews && <p>There are no comments yet for this movie</p>}
            {reviews && (
                <List>
                    {reviews.map(({ author, content, id }) => (
                        <ListItem key={id}>
                            <h4 style={{ margin: '0' }}>Author: {author}</h4>
                            <p style={{ margin: '0' }}>{content}</p>
                        </ListItem>
                    ))}
                </List>
            )}
        </>
    );
};

export default Reviews;