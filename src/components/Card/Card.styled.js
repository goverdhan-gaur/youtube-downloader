import styled from 'styled-components';
export const Wrapper = styled.div`
    position: relative;
    padding: 1rem;
    background: rgba( 255, 255, 255, 0.25 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );
`;

export const Resolution = styled.span`
position: absolute;
background: white;
color: red;
font-size: 16px;
padding: 3px 5px;
text-transform: uppercase;
top: 0;
right: 0;

`;