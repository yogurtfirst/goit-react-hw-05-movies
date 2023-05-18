import styled from '@emotion/styled';

export const Container = styled.div`
    width: 800px;
    margin: 15px auto;
`;

export const Info = styled.div`
    margin-left: 12px;
`;

export const AdditionalInfo = styled.div`
    border-top: 1px solid grey;
    border-bottom: 1px solid grey;
    margin-top: 8px;
    margin-bottom: 8px;
`;

export const List = styled.ul`
    list-style-type: none;
    display: flex;
    gap: 20px;
    justify-content: center;
`;

export const ListItem = styled.li`
    display: block;
    padding: 12px;
    text-align: center;
    width: 60px;
    background-color: #add8e6;
`;