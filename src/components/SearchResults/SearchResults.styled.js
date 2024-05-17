import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    max-width: 800px;
    position: absolute;
    top: 3rem;
`;

export const MetaContainer = styled.div`
    padding: 2rem;
    background: white;
    color: black;
    font-weight: 800;
    display: flex;
    align-items: center;
    gap: 2rem;
`;

export const Thumbnail = styled.img`
    width: 200px;
`;

export const MetaInfo = styled.div``;

export const link = styled.a`
    text-align: center; 
    font-size: 30px;
    display: block;
    color: black;
    margin: 50px 0;
    cursor: pointer; 
    transition: color 0.1s;
    &:hover {
        color: #202022;
    }
`;

export const Title = styled.h1`
    font-weight: 900;
    margin-top: 0;
    color: #FF512F;
`;

export const Description = styled.p`
    font-size: 10px;
`;


export const Categories = styled.div`
    font-size: 10px;
`;

export const Category = styled.span`
    font-size: 10px;
`;

export const Cards = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
`;


export const Card = styled.div``;