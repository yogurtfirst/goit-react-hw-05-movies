import styled from '@emotion/styled';

export const List = styled.ul`
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
`;

export const ListItem = styled.li`
    display: flex;
    flex-direction: column;
    width: 120px;
    height: 210px;
    border-color: #aaa;
    text-align: center;
`;

export const Image = styled.img`
    display: block;
    width: 100%;
    height: 180px;
    object-fit: cover;
`;

export const Actor = styled.p`
    margin: 0;
    font-size: 12px;
    font-weight: 700;
`;

export const Character = styled.p`
    font-size: 12px;
    margin: 0px;
    font-weight: 500;
`;