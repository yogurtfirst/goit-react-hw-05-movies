import styled from '@emotion/styled';

export const List = styled.ul`
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
`;

export const ListItem = styled.li`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 330px;
    transition: border-color 0.3s, box-shadow 0.3s;

    &:hover {
        border-color: #aaa;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }
`;

export const Image = styled.img`
    display: block;
    width: 100%;
    height: 300px;
    object-fit: cover;
`;

export const Title = styled.p`
    height: 20px;
    margin: 0;
    padding: 5px 10px;
    font-size: 12px;
    background-color: rgba(0, 0, 0, 0.2);
    color: #2a2a2a;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export const Rate = styled.p`
    position: absolute;
    top: 0;
    right: 0;
    margin: 0;
    padding: 5px;
    font-size: 12px;
    font-weight: 500;
    background-color: #F0E68C;
    color: #000;
    border-bottom-left-radius: 5px;
`;