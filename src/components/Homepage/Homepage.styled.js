import styled from 'styled-components';

export const Wrapper = styled.div`
    /* Styles goes here */
    display: flex;
    width: 100%;
    height: 100vh;
    font-size: 16px;
    align-items: center;
    justify-content: center;
    position: relative;
`;
export const title = styled.h1`
    position: absolute;
    top: 200px;
    font-weight: 600;
    font-size: 48px;
`
export const Textarea = styled.input`
    width: 50%;
    outline: none;
    border: none;
    color: black;
    padding: 0.52rem 1rem;
    background: white;
`;

export const Heading = styled.h2`
    // position: absolute;
`;

export const formGroup = styled.div`
    display: flex;
    flex-direction:column;
    & > * {
        width:100%;
    }
`;